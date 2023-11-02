// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { CryptoHash } from "./CryptoHash";
import { ReceiptAction } from "./ReceiptAction";
import { ReceiptData } from "./ReceiptData";

export class Receipt {
  static encode(message: Receipt, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.predecessorId);

    writer.uint32(18);
    writer.string(message.receiverId);

    const receiptId = message.receiptId;
    if (receiptId !== null) {
      writer.uint32(26);
      writer.fork();
      CryptoHash.encode(receiptId, writer);
      writer.ldelim();
    }

    const action = message.action;
    if (action !== null) {
      writer.uint32(82);
      writer.fork();
      ReceiptAction.encode(action, writer);
      writer.ldelim();
    }

    const data = message.data;
    if (data !== null) {
      writer.uint32(90);
      writer.fork();
      ReceiptData.encode(data, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Receipt {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Receipt();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.predecessorId = reader.string();
          break;

        case 2:
          message.receiverId = reader.string();
          break;

        case 3:
          message.receiptId = CryptoHash.decode(reader, reader.uint32());
          break;

        case 10:
          message.action = ReceiptAction.decode(reader, reader.uint32());
          break;

        case 11:
          message.data = ReceiptData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  predecessorId: string;
  receiverId: string;
  receiptId: CryptoHash | null;
  action: ReceiptAction | null;
  data: ReceiptData | null;

  constructor(
    predecessorId: string = "",
    receiverId: string = "",
    receiptId: CryptoHash | null = null,
    action: ReceiptAction | null = null,
    data: ReceiptData | null = null
  ) {
    this.predecessorId = predecessorId;
    this.receiverId = receiverId;
    this.receiptId = receiptId;
    this.action = action;
    this.data = data;
  }
}