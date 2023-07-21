export default ({ IDL }) => {
    const InitData = IDL.Record({
      owner: IDL.Principal,
      name: IDL.Text,
      variable_canister: IDL.Principal,
      act_canister: IDL.Principal,
      symbol: IDL.Text,
    });
    const PubType = IDL.Variant({
      Read: IDL.Null,
      ReadWrite: IDL.Null,
      Write: IDL.Null,
    });
    const Error = IDL.Variant({
      Internal: IDL.Text,
      NotAuthorized: IDL.Null,
      StableError: IDL.Text,
    });
    const Result = IDL.Variant({ Ok: IDL.Null, Err: Error });
    return IDL.Service({
      approve: IDL.Func([IDL.Principal, IDL.Nat64], [], []),
      balance_of: IDL.Func([IDL.Principal], [IDL.Nat64], ["query"]),
      burn: IDL.Func([IDL.Nat64], [], []),
      get_act_canister: IDL.Func([], [IDL.Principal], ["query"]),
      get_approved: IDL.Func([IDL.Nat64], [IDL.Principal], ["query"]),
      get_owner: IDL.Func([], [IDL.Principal], ["query"]),
      get_pub_type: IDL.Func([IDL.Nat64], [PubType], ["query"]),
      get_read_price: IDL.Func([IDL.Nat64], [IDL.Nat64], ["query"]),
      get_tokens: IDL.Func([IDL.Principal], [IDL.Vec(IDL.Nat64)], ["query"]),
      get_variable_canister: IDL.Func([], [IDL.Principal], ["query"]),
      get_write_price: IDL.Func([IDL.Nat64], [IDL.Nat64], ["query"]),
      is_approved_for_all: IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ["query"]
      ),
      mint: IDL.Func(
        [IDL.Opt(PubType), IDL.Opt(IDL.Nat64), IDL.Opt(IDL.Nat64)],
        [IDL.Nat64],
        []
      ),
      name: IDL.Func([], [IDL.Text], ["query"]),
      owner_of: IDL.Func([IDL.Nat64], [IDL.Principal], ["query"]),
      set_act_canister: IDL.Func([IDL.Principal], [Result], []),
      set_approval_for_all: IDL.Func([IDL.Principal, IDL.Bool], [], []),
      set_owner: IDL.Func([IDL.Principal], [Result], []),
      set_read_price: IDL.Func([IDL.Nat64, IDL.Nat64], [], []),
      set_variable_canister: IDL.Func([IDL.Principal], [Result], []),
      set_write_price: IDL.Func([IDL.Nat64, IDL.Nat64], [], []),
      symbol: IDL.Func([], [IDL.Text], ["query"]),
      token_uri: IDL.Func([IDL.Nat64], [IDL.Text], ["query"]),
      transfer_from: IDL.Func([IDL.Principal, IDL.Principal, IDL.Nat64], [], []),
      update_pub_type: IDL.Func([IDL.Nat64, PubType], [], []),
    });
  };
  export const init = ({ IDL }) => {
    const InitData = IDL.Record({
      owner: IDL.Principal,
      name: IDL.Text,
      variable_canister: IDL.Principal,
      act_canister: IDL.Principal,
      symbol: IDL.Text,
    });
    return [InitData];
  };
  