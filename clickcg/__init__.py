__version__ = "0.0.1"


from erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts import (
    get_html,
)

from clickcg.overrides.process_statement_of_accounts import get_html as clickcg_get_html

get_html = clickcg_get_html
