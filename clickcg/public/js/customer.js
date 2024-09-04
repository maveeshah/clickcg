frappe.ui.form.on("Customer", {
    refresh: function (frm) {

        if (!frm.doc.__islocal) {
            console.log("refresh");

            // custom buttons
            frm.add_custom_button(
                __("Cuentas por Cobrar"),
                function () {
                    frappe.set_route("query-report", "Cuentas por Cobrar", {
                        party_type: "Customer",
                        party: frm.doc.name,
                    });
                },
                __("View")
            );

            frm.add_custom_button(
                __("Accounting Ledger"),
                function () {
                    frappe.set_route("query-report", "General Ledger", {
                        party_type: "Customer",
                        party: frm.doc.name,
                        party_name: frm.doc.customer_name,
                    });
                },
                __("View")
            );

            frm.add_custom_button(
                __("Pricing Rule"),
                function () {
                    erpnext.utils.make_pricing_rule(frm.doc.doctype, frm.doc.name);
                },
                __("Create")
            );

            frm.add_custom_button(
                __("Get Customer Group Details"),
                function () {
                    frm.trigger("get_customer_group_details");
                },
                __("Actions")
            );

            if (cint(frappe.defaults.get_default("enable_common_party_accounting"))) {
                frm.add_custom_button(
                    __("Link with Supplier"),
                    function () {
                        frm.trigger("show_party_link_dialog");
                    },
                    __("Actions")
                );
            }

            // indicator
            erpnext.utils.set_party_dashboard_indicators(frm);
        } else {
            frappe.contacts.clear_address_and_contact(frm);
        }

    },
});