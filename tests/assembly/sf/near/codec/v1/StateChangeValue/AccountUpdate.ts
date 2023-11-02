// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { Account } from "../Account";

export class AccountUpdate {
  static encode(message: AccountUpdate, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.accountId);

    const account = message.account;
    if (account !== null) {
      writer.uint32(18);
      writer.fork();
      Account.encode(account, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AccountUpdate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AccountUpdate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;

        case 2:
          message.account = Account.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  accountId: string;
  account: Account | null;

  constructor(accountId: string = "", account: Account | null = null) {
    this.accountId = accountId;
    this.account = account;
  }
}
