export default ({ IDL }) => {
    const InitData = IDL.Record({ owner: IDL.Principal });
    const Error = IDL.Variant({
      Internal: IDL.Text,
      NotAuthorized: IDL.Null,
      StableError: IDL.Text,
      CanisterCallError: IDL.Text,
    });
    const Result = IDL.Variant({ Ok: IDL.Null, Err: Error });
    const Result_1 = IDL.Variant({ Ok: IDL.Nat64, Err: Error });
    const Result_2 = IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text });
    return IDL.Service({
      approve: IDL.Func([IDL.Principal, IDL.Nat64, IDL.Nat64], [], []),
      balance_of: IDL.Func([IDL.Principal, IDL.Nat64], [IDL.Nat64], ["query"]),
      collection_id_from_vonft: IDL.Func(
        [IDL.Nat64, IDL.Nat8],
        [IDL.Nat64],
        ["query"]
      ),
      collection_name: IDL.Func([IDL.Nat64], [IDL.Text], ["query"]),
      exists: IDL.Func([IDL.Nat64, IDL.Nat64], [IDL.Bool], ["query"]),
      expiration_time: IDL.Func([IDL.Nat64, IDL.Nat64], [IDL.Nat64], ["query"]),
      gc: IDL.Func([IDL.Principal], [], []),
      get_approved: IDL.Func([IDL.Nat64, IDL.Nat64], [IDL.Principal], ["query"]),
      get_owner: IDL.Func([], [IDL.Principal], ["query"]),
      get_user_tokens: IDL.Func(
        [IDL.Principal, IDL.Nat64],
        [IDL.Vec(IDL.Nat64)],
        ["query"]
      ),
      get_vonft: IDL.Func([], [IDL.Principal], ["query"]),
      is_approved_for_all: IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ["query"]
      ),
      merge: IDL.Func([IDL.Nat8, IDL.Nat64, IDL.Principal], [Result], []),
      mint: IDL.Func([IDL.Nat8, IDL.Nat64, IDL.Nat64], [Result_1], []),
      mint_to: IDL.Func(
        [IDL.Nat8, IDL.Nat64, IDL.Nat64, IDL.Text],
        [Result_1],
        []
      ),
      owner_of: IDL.Func([IDL.Nat64, IDL.Nat64], [IDL.Principal], ["query"]),
      permission: IDL.Func(
        [IDL.Nat8, IDL.Principal, IDL.Nat64],
        [Result_2],
        ["query"]
      ),
      set_approval_for_all: IDL.Func([IDL.Principal, IDL.Bool], [], []),
      set_owner: IDL.Func([IDL.Principal], [Result], []),
      set_vonft: IDL.Func([IDL.Principal], [Result], []),
      symbol: IDL.Func([IDL.Nat64], [IDL.Text], ["query"]),
      transfer_from: IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat64, IDL.Nat64],
        [],
        []
      ),
    });
  };
  export const init = ({ IDL }) => {
    const InitData = IDL.Record({ owner: IDL.Principal });
    return [InitData];
  };
  