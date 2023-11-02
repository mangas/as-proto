// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";

export class DeleteAccountAction {
  static encode(message: DeleteAccountAction, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.beneficiaryId);
  }

  static decode(reader: Reader, length: i32): DeleteAccountAction {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DeleteAccountAction();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beneficiaryId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  beneficiaryId: string;

  constructor(beneficiaryId: string = "") {
    this.beneficiaryId = beneficiaryId;
  }
}