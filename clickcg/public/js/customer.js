frappe.ui.form.on("Customer", {
    refresh: function (frm) {
        if (!frm.doc.__islocal) {
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
        }
    },
});
