export type Institution = {
  name: string;
  logo: string;
  country: string;
  psu_types: string[];
  auth_methods: string[];
  maximum_consent_validity: number;
  beta: boolean;
  bic: string;
  required_psu_headers: string[];
};

export type TransformInstitution = {
  id: string;
  name: string;
  logo: string;
  provider: "enablebanking";
};

export interface GetAccountDetailsResponse {
  account_id: {
    iban: string;
  };
  all_account_ids: Array<{
    identification: string;
    scheme_name: string;
  }>;
  account_servicer: {
    bic_fi: string;
    clearing_system_member_id: {
      clearing_system_id: string;
      member_id: number;
    };
    name: string;
  };
  name: string;
  details: string;
  usage: string;
  cash_account_type: string;
  product: string;
  currency: string;
  psu_status: string;
  credit_limit: {
    currency: string;
    amount: string;
  };
  legal_age: boolean;
  postal_address: {
    address_type: string;
    department: string;
    sub_department: string;
    street_name: string;
    building_number: string;
    post_code: string;
    town_name: string;
    country_sub_division: string;
    country: string;
    address_line: string[];
  };
  uid: string;
  identification_hash: string;
  identification_hashes: string[];
  institution: {
    country: string;
    name: string;
  };
  balance: GetBalancesResponse["balances"][0];
}

export type SessionStatus =
  | "AUTHORIZED"
  | "CANCELLED"
  | "CLOSED"
  | "EXPIRED"
  | "INVALID"
  | "PENDING_AUTHORIZATION"
  | "RETURNED_FROM_BANK"
  | "REVOKED";

export type GetSessionResponse = {
  access: {
    valid_until: string;
    accounts?: null;
    balances: boolean;
    transactions: boolean;
  };
  accounts: string[];
  aspsp: {
    country: string;
    name: string;
  };
  psu_type: "business" | "personal";
  session_id: string;
  status: SessionStatus;
};

export interface GetAspspsResponse {
  aspsps: Array<{
    auth_methods: Array<{
      approach: string;
      credentials: Array<{
        description: string;
        name: string;
        required: boolean;
        template: string;
        title: string;
      }>;
      hidden_method: boolean;
      name: string;
      psu_type: string;
    }>;
    beta: boolean;
    bic: string;
    country: string;
    logo: string;
    maximum_consent_validity: number;
    name: string;
    payments: Array<{
      allowed_auth_methods: string[];
      charge_bearer_values: string[];
      creditor_account_schemas: string[];
      creditor_agent_bic_fi_required: boolean;
      creditor_agent_clearing_system_member_id_required: boolean;
      creditor_country_required: boolean;
      creditor_name_required: boolean;
      creditor_postal_address_required: boolean;
      currencies: string[];
      debtor_account_required: boolean;
      debtor_account_schemas: string[];
      debtor_contact_email_required: boolean;
      debtor_contact_phone_required: boolean;
      debtor_currency_required: boolean;
      max_transactions: number;
      payment_type: string;
      priority_codes: string[];
      psu_type: string;
      reference_number_schemas: string[];
      reference_number_supported: boolean;
      regulatory_reporting_code_required: boolean;
      remittance_information_lines: Array<{
        max_length: number;
        min_length: number;
        pattern: string;
      }>;
      remittance_information_required: boolean;
      requested_execution_date_max_period: number;
      requested_execution_date_supported: boolean;
    }>;
    psu_types: string[];
    required_psu_headers: string[];
  }>;
}

export interface GetBalancesResponse {
  balances: Array<{
    name: string;
    balance_amount: {
      currency: string;
      amount: string;
    };
    balance_type: string;
    last_change_date_time: string;
    reference_date: string;
    last_committed_transaction: string;
  }>;
}

export type AuthenticateResponse = {
  access: {
    valid_until: string;
  };
  aspsp: {
    name: string;
    country: string;
  };
  state: string;
  redirect_url: string;
  psu_type: string;
  auth_method: string;
  credentials: {
    userId: string;
  };
  credentials_autosubmit: boolean;
  language: string;
  psu_id: string;
};

export type GetAccountsRequest = {
  id: string;
};

export type GetTransaction = {
  entry_reference: string;
  merchant_category_code: string;
  transaction_amount: {
    currency: string;
    amount: string;
  };
  creditor?: {
    name: string;
    postal_address?: {
      address_line: string[];
      address_type: string;
      building_number: string;
      country: string;
      country_sub_division: string;
      department: string;
      post_code: string;
      street_name: string;
      sub_department: string;
      town_name: string;
    };
  };
  creditor_account?: {
    iban: string;
  };
  creditor_agent?: {
    bic_fi: string;
    clearing_system_member_id?: {
      clearing_system_id: string;
      member_id: number;
    };
    name: string;
  };
  debtor?: {
    name: string;
    postal_address?: {
      address_line: string[];
      address_type: string;
      building_number: string;
      country: string;
      country_sub_division: string;
      department: string;
      post_code: string;
      street_name: string;
      sub_department: string;
      town_name: string;
    };
  };
  debtor_account?: {
    iban: string;
  };
  debtor_agent?: {
    bic_fi: string;
    clearing_system_member_id?: {
      clearing_system_id: string;
      member_id: number;
    };
    name: string;
  };
  bank_transaction_code?: {
    description: string;
    code: string;
    sub_code: string;
  };
  credit_debit_indicator: string;
  status: string;
  booking_date: string;
  value_date: string;
  transaction_date: string;
  balance_after_transaction?: {
    currency: string;
    amount: string;
  };
  reference_number?: string;
  remittance_information?: string[];
  debtor_account_additional_identification?: {
    identification: string;
    scheme_name: string;
  };
  creditor_account_additional_identification?: {
    identification: string;
    scheme_name: string;
  };
  exchange_rate?: {
    unit_currency: string;
    exchange_rate: string;
    rate_type: string;
    contract_identification: string;
    instructed_amount: {
      currency: string;
      amount: string;
    };
  };
  note?: string;
  transaction_id: string;
};

export type GetTransactionsRequest = {
  accountId: string;
  latest: boolean;
};

export type GetTransactionsResponse = {
  transactions: Array<GetTransaction>;
  continuation_key?: string;
};
