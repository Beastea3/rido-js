const idlFactory = ({ IDL }) => {
  const InitData = IDL.Record({
    owner: IDL.Principal,
    vot_symbol: IDL.Text,
    vot_name: IDL.Text,
    validators: IDL.Vec(IDL.Text),
  });
  const Account = IDL.Variant({ Ic: IDL.Principal, Eth: IDL.Text });
  const Account_1 = IDL.Record({ ic: IDL.Text, eth: IDL.Text });
  const Error = IDL.Variant({
    Internal: IDL.Text,
    ValidatorError: IDL.Null,
    VotActOwnerPubTypeError: IDL.Null,
    TemplateNotExist: IDL.Null,
    NotAuthorized: IDL.Null,
    StableError: IDL.Text,
  });
  const Result = IDL.Variant({ Ok: IDL.Null, Err: Error });
  const Result_1 = IDL.Variant({ Ok: IDL.Nat64, Err: Error });
  const Result_2 = IDL.Variant({ Ok: IDL.Principal, Err: Error });
  const Result_3 = IDL.Variant({ Ok: IDL.Vec(IDL.Nat8), Err: Error });
  const Result_4 = IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text });
  const PubType = IDL.Variant({
    Read: IDL.Null,
    ReadWrite: IDL.Null,
    Write: IDL.Null,
  });
  return IDL.Service({
    act_approve: IDL.Func([Account, IDL.Nat64, IDL.Nat64], [], []),
    act_balance_of: IDL.Func([Account, IDL.Nat64], [IDL.Nat64], ["query"]),
    act_collection_id_from_vonft: IDL.Func(
      [IDL.Nat64, IDL.Nat8],
      [IDL.Nat64],
      ["query"]
    ),
    act_collection_name: IDL.Func([IDL.Nat64], [IDL.Text], ["query"]),
    act_collection_symbol: IDL.Func([IDL.Nat64], [IDL.Text], ["query"]),
    act_exists: IDL.Func([IDL.Nat64, IDL.Nat64], [IDL.Bool], ["query"]),
    act_expiration_time: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Nat64],
      ["query"]
    ),
    act_gc: IDL.Func([Account], [], []),
    act_get_approved: IDL.Func([IDL.Nat64, IDL.Nat64], [Account_1], ["query"]),
    act_get_user_tokens: IDL.Func(
      [Account, IDL.Nat64],
      [IDL.Vec(IDL.Nat64)],
      ["query"]
    ),
    act_is_approved_for_all: IDL.Func(
      [Account, Account],
      [IDL.Bool],
      ["query"]
    ),
    act_merge: IDL.Func([IDL.Nat8, IDL.Nat64, IDL.Principal], [Result], []),
    act_mint: IDL.Func([IDL.Nat8, IDL.Nat64, IDL.Nat64], [Result_1], []),
    act_mint_to: IDL.Func(
      [IDL.Nat8, IDL.Nat64, IDL.Nat64, Account],
      [Result_1],
      []
    ),
    act_owner_of: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Principal, IDL.Opt(IDL.Text)],
      ["query"]
    ),
    act_set_approval_for_all: IDL.Func([Account, IDL.Bool], [], []),
    act_transfer_from: IDL.Func(
      [Account, Account, IDL.Nat64, IDL.Nat64],
      [],
      []
    ),
    act_unapprove: IDL.Func([IDL.Nat64, IDL.Nat64], [], []),
    address_to_principal: IDL.Func([IDL.Text], [Result_2], []),
    get: IDL.Func([IDL.Nat64], [Result_3], ["query"]),
    get_act_vot: IDL.Func([], [IDL.Text, IDL.Text], ["query"]),
    get_cycle_balance: IDL.Func([], [IDL.Nat64], ["query"]),
    get_owner: IDL.Func([], [IDL.Principal, IDL.Opt(IDL.Text)], ["query"]),
    init_mint: IDL.Func([], [], []),
    permission: IDL.Func([IDL.Nat8, Account, IDL.Nat64], [Result_4], ["query"]),
    principal_to_address: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(IDL.Text)],
      ["query"]
    ),
    public_read: IDL.Func([], [IDL.Int8], ["query"]),
    set: IDL.Func([IDL.Nat64, IDL.Vec(IDL.Nat8)], [Result], []),
    set_owner: IDL.Func([IDL.Principal], [Result], []),
    vot_approve: IDL.Func([Account, IDL.Nat64], [], []),
    vot_balance_of: IDL.Func([Account], [IDL.Nat64], ["query"]),
    vot_burn: IDL.Func([IDL.Nat64], [], []),
    vot_get_approved: IDL.Func([IDL.Nat64], [Account_1], ["query"]),
    vot_get_pub_type: IDL.Func([IDL.Nat64], [PubType], ["query"]),
    vot_get_read_price: IDL.Func([IDL.Nat64], [IDL.Nat64], ["query"]),
    vot_get_tokens: IDL.Func([IDL.Principal], [IDL.Vec(IDL.Nat64)], ["query"]),
    vot_get_write_price: IDL.Func([IDL.Nat64], [IDL.Nat64], ["query"]),
    vot_is_approved_for_all: IDL.Func(
      [Account, Account],
      [IDL.Bool],
      ["query"]
    ),
    vot_mint: IDL.Func(
      [IDL.Opt(PubType), IDL.Opt(IDL.Nat64), IDL.Opt(IDL.Nat64)],
      [IDL.Nat64],
      []
    ),
    vot_name: IDL.Func([], [IDL.Text], ["query"]),
    vot_owner_of: IDL.Func(
      [IDL.Nat64],
      [IDL.Principal, IDL.Opt(IDL.Text)],
      ["query"]
    ),
    vot_set_approval_for_all: IDL.Func([Account, IDL.Bool], [], []),
    vot_set_read_price: IDL.Func([IDL.Nat64, IDL.Nat64], [], []),
    vot_set_write_price: IDL.Func([IDL.Nat64, IDL.Nat64], [], []),
    vot_symbol: IDL.Func([], [IDL.Text], ["query"]),
    vot_token_uri: IDL.Func([IDL.Nat64], [IDL.Text], ["query"]),
    vot_transfer_from: IDL.Func([Account, Account, IDL.Nat64], [], []),
    vot_unapprove: IDL.Func([IDL.Nat64], [], []),
    vot_update_pub_type: IDL.Func([IDL.Nat64, PubType], [], []),
    wallet_receive: IDL.Func([], [IDL.Nat64], []),
  });
};
export const init = ({ IDL }) => {
  const InitData = IDL.Record({
    owner: IDL.Principal,
    vot_symbol: IDL.Text,
    vot_name: IDL.Text,
    validators: IDL.Vec(IDL.Text),
  });
  return [InitData];
};

export default idlFactory;
