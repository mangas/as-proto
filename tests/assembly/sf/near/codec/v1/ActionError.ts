// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { AccountAlreadyExistsErrorKind } from "./AccountAlreadyExistsErrorKind";
import { AccountDoesNotExistErrorKind } from "./AccountDoesNotExistErrorKind";
import { CreateAccountOnlyByRegistrarErrorKind } from "./CreateAccountOnlyByRegistrarErrorKind";
import { CreateAccountNotAllowedErrorKind } from "./CreateAccountNotAllowedErrorKind";
import { ActorNoPermissionErrorKind } from "./ActorNoPermissionErrorKind";
import { DeleteKeyDoesNotExistErrorKind } from "./DeleteKeyDoesNotExistErrorKind";
import { AddKeyAlreadyExistsErrorKind } from "./AddKeyAlreadyExistsErrorKind";
import { DeleteAccountStakingErrorKind } from "./DeleteAccountStakingErrorKind";
import { LackBalanceForStateErrorKind } from "./LackBalanceForStateErrorKind";
import { TriesToUnstakeErrorKind } from "./TriesToUnstakeErrorKind";
import { TriesToStakeErrorKind } from "./TriesToStakeErrorKind";
import { InsufficientStakeErrorKind } from "./InsufficientStakeErrorKind";
import { FunctionCallErrorKind } from "./FunctionCallErrorKind";
import { NewReceiptValidationErrorKind } from "./NewReceiptValidationErrorKind";
import { OnlyImplicitAccountCreationAllowedErrorKind } from "./OnlyImplicitAccountCreationAllowedErrorKind";
import { DeleteAccountWithLargeStateErrorKind } from "./DeleteAccountWithLargeStateErrorKind";

export class ActionError {
  static encode(message: ActionError, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.index);

    const accountAlreadyExist = message.accountAlreadyExist;
    if (accountAlreadyExist !== null) {
      writer.uint32(170);
      writer.fork();
      AccountAlreadyExistsErrorKind.encode(accountAlreadyExist, writer);
      writer.ldelim();
    }

    const accountDoesNotExist = message.accountDoesNotExist;
    if (accountDoesNotExist !== null) {
      writer.uint32(178);
      writer.fork();
      AccountDoesNotExistErrorKind.encode(accountDoesNotExist, writer);
      writer.ldelim();
    }

    const createAccountOnlyByRegistrar = message.createAccountOnlyByRegistrar;
    if (createAccountOnlyByRegistrar !== null) {
      writer.uint32(186);
      writer.fork();
      CreateAccountOnlyByRegistrarErrorKind.encode(
        createAccountOnlyByRegistrar,
        writer
      );
      writer.ldelim();
    }

    const createAccountNotAllowed = message.createAccountNotAllowed;
    if (createAccountNotAllowed !== null) {
      writer.uint32(194);
      writer.fork();
      CreateAccountNotAllowedErrorKind.encode(createAccountNotAllowed, writer);
      writer.ldelim();
    }

    const actorNoPermission = message.actorNoPermission;
    if (actorNoPermission !== null) {
      writer.uint32(202);
      writer.fork();
      ActorNoPermissionErrorKind.encode(actorNoPermission, writer);
      writer.ldelim();
    }

    const deleteKeyDoesNotExist = message.deleteKeyDoesNotExist;
    if (deleteKeyDoesNotExist !== null) {
      writer.uint32(210);
      writer.fork();
      DeleteKeyDoesNotExistErrorKind.encode(deleteKeyDoesNotExist, writer);
      writer.ldelim();
    }

    const addKeyAlreadyExists = message.addKeyAlreadyExists;
    if (addKeyAlreadyExists !== null) {
      writer.uint32(218);
      writer.fork();
      AddKeyAlreadyExistsErrorKind.encode(addKeyAlreadyExists, writer);
      writer.ldelim();
    }

    const deleteAccountStaking = message.deleteAccountStaking;
    if (deleteAccountStaking !== null) {
      writer.uint32(226);
      writer.fork();
      DeleteAccountStakingErrorKind.encode(deleteAccountStaking, writer);
      writer.ldelim();
    }

    const lackBalanceForState = message.lackBalanceForState;
    if (lackBalanceForState !== null) {
      writer.uint32(234);
      writer.fork();
      LackBalanceForStateErrorKind.encode(lackBalanceForState, writer);
      writer.ldelim();
    }

    const triesToUnstake = message.triesToUnstake;
    if (triesToUnstake !== null) {
      writer.uint32(242);
      writer.fork();
      TriesToUnstakeErrorKind.encode(triesToUnstake, writer);
      writer.ldelim();
    }

    const triesToStake = message.triesToStake;
    if (triesToStake !== null) {
      writer.uint32(250);
      writer.fork();
      TriesToStakeErrorKind.encode(triesToStake, writer);
      writer.ldelim();
    }

    const insufficientStake = message.insufficientStake;
    if (insufficientStake !== null) {
      writer.uint32(258);
      writer.fork();
      InsufficientStakeErrorKind.encode(insufficientStake, writer);
      writer.ldelim();
    }

    const functionCall = message.functionCall;
    if (functionCall !== null) {
      writer.uint32(266);
      writer.fork();
      FunctionCallErrorKind.encode(functionCall, writer);
      writer.ldelim();
    }

    const newReceiptValidation = message.newReceiptValidation;
    if (newReceiptValidation !== null) {
      writer.uint32(274);
      writer.fork();
      NewReceiptValidationErrorKind.encode(newReceiptValidation, writer);
      writer.ldelim();
    }

    const onlyImplicitAccountCreationAllowed =
      message.onlyImplicitAccountCreationAllowed;
    if (onlyImplicitAccountCreationAllowed !== null) {
      writer.uint32(282);
      writer.fork();
      OnlyImplicitAccountCreationAllowedErrorKind.encode(
        onlyImplicitAccountCreationAllowed,
        writer
      );
      writer.ldelim();
    }

    const deleteAccountWithLargeState = message.deleteAccountWithLargeState;
    if (deleteAccountWithLargeState !== null) {
      writer.uint32(290);
      writer.fork();
      DeleteAccountWithLargeStateErrorKind.encode(
        deleteAccountWithLargeState,
        writer
      );
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ActionError {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ActionError();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;

        case 21:
          message.accountAlreadyExist = AccountAlreadyExistsErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 22:
          message.accountDoesNotExist = AccountDoesNotExistErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 23:
          message.createAccountOnlyByRegistrar =
            CreateAccountOnlyByRegistrarErrorKind.decode(
              reader,
              reader.uint32()
            );
          break;

        case 24:
          message.createAccountNotAllowed =
            CreateAccountNotAllowedErrorKind.decode(reader, reader.uint32());
          break;

        case 25:
          message.actorNoPermission = ActorNoPermissionErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 26:
          message.deleteKeyDoesNotExist = DeleteKeyDoesNotExistErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 27:
          message.addKeyAlreadyExists = AddKeyAlreadyExistsErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 28:
          message.deleteAccountStaking = DeleteAccountStakingErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 29:
          message.lackBalanceForState = LackBalanceForStateErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 30:
          message.triesToUnstake = TriesToUnstakeErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 31:
          message.triesToStake = TriesToStakeErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 32:
          message.insufficientStake = InsufficientStakeErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 33:
          message.functionCall = FunctionCallErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 34:
          message.newReceiptValidation = NewReceiptValidationErrorKind.decode(
            reader,
            reader.uint32()
          );
          break;

        case 35:
          message.onlyImplicitAccountCreationAllowed =
            OnlyImplicitAccountCreationAllowedErrorKind.decode(
              reader,
              reader.uint32()
            );
          break;

        case 36:
          message.deleteAccountWithLargeState =
            DeleteAccountWithLargeStateErrorKind.decode(
              reader,
              reader.uint32()
            );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  index: u64;
  accountAlreadyExist: AccountAlreadyExistsErrorKind | null;
  accountDoesNotExist: AccountDoesNotExistErrorKind | null;
  createAccountOnlyByRegistrar: CreateAccountOnlyByRegistrarErrorKind | null;
  createAccountNotAllowed: CreateAccountNotAllowedErrorKind | null;
  actorNoPermission: ActorNoPermissionErrorKind | null;
  deleteKeyDoesNotExist: DeleteKeyDoesNotExistErrorKind | null;
  addKeyAlreadyExists: AddKeyAlreadyExistsErrorKind | null;
  deleteAccountStaking: DeleteAccountStakingErrorKind | null;
  lackBalanceForState: LackBalanceForStateErrorKind | null;
  triesToUnstake: TriesToUnstakeErrorKind | null;
  triesToStake: TriesToStakeErrorKind | null;
  insufficientStake: InsufficientStakeErrorKind | null;
  functionCall: FunctionCallErrorKind | null;
  newReceiptValidation: NewReceiptValidationErrorKind | null;
  onlyImplicitAccountCreationAllowed: OnlyImplicitAccountCreationAllowedErrorKind | null;
  deleteAccountWithLargeState: DeleteAccountWithLargeStateErrorKind | null;

  constructor(
    index: u64 = 0,
    accountAlreadyExist: AccountAlreadyExistsErrorKind | null = null,
    accountDoesNotExist: AccountDoesNotExistErrorKind | null = null,
    createAccountOnlyByRegistrar: CreateAccountOnlyByRegistrarErrorKind | null = null,
    createAccountNotAllowed: CreateAccountNotAllowedErrorKind | null = null,
    actorNoPermission: ActorNoPermissionErrorKind | null = null,
    deleteKeyDoesNotExist: DeleteKeyDoesNotExistErrorKind | null = null,
    addKeyAlreadyExists: AddKeyAlreadyExistsErrorKind | null = null,
    deleteAccountStaking: DeleteAccountStakingErrorKind | null = null,
    lackBalanceForState: LackBalanceForStateErrorKind | null = null,
    triesToUnstake: TriesToUnstakeErrorKind | null = null,
    triesToStake: TriesToStakeErrorKind | null = null,
    insufficientStake: InsufficientStakeErrorKind | null = null,
    functionCall: FunctionCallErrorKind | null = null,
    newReceiptValidation: NewReceiptValidationErrorKind | null = null,
    onlyImplicitAccountCreationAllowed: OnlyImplicitAccountCreationAllowedErrorKind | null = null,
    deleteAccountWithLargeState: DeleteAccountWithLargeStateErrorKind | null = null
  ) {
    this.index = index;
    this.accountAlreadyExist = accountAlreadyExist;
    this.accountDoesNotExist = accountDoesNotExist;
    this.createAccountOnlyByRegistrar = createAccountOnlyByRegistrar;
    this.createAccountNotAllowed = createAccountNotAllowed;
    this.actorNoPermission = actorNoPermission;
    this.deleteKeyDoesNotExist = deleteKeyDoesNotExist;
    this.addKeyAlreadyExists = addKeyAlreadyExists;
    this.deleteAccountStaking = deleteAccountStaking;
    this.lackBalanceForState = lackBalanceForState;
    this.triesToUnstake = triesToUnstake;
    this.triesToStake = triesToStake;
    this.insufficientStake = insufficientStake;
    this.functionCall = functionCall;
    this.newReceiptValidation = newReceiptValidation;
    this.onlyImplicitAccountCreationAllowed =
      onlyImplicitAccountCreationAllowed;
    this.deleteAccountWithLargeState = deleteAccountWithLargeState;
  }
}