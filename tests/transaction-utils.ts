import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
  Approval,
  Deposit,
  Withdraw,
  Sweep,
  LockedProfitDegradationUpdated,
  StrategyAdded,
  StrategyReported,
  UpdateGovernance,
  UpdateManagement,
  UpdateRewards,
  UpdateDepositLimit,
  UpdatePerformanceFee,
  UpdateManagementFee,
  UpdateGuardian,
  EmergencyShutdown,
  UpdateWithdrawalQueue,
  StrategyUpdateDebtRatio,
  StrategyUpdateMinDebtPerHarvest,
  StrategyUpdateMaxDebtPerHarvest,
  StrategyUpdatePerformanceFee,
  StrategyMigrated,
  StrategyRevoked,
  StrategyRemovedFromQueue,
  StrategyAddedToQueue
} from "../generated/Transaction/Transaction"

export function createTransferEvent(
  sender: Address,
  receiver: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDepositEvent(
  recipient: Address,
  shares: BigInt,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createWithdrawEvent(
  recipient: Address,
  shares: BigInt,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}

export function createSweepEvent(token: Address, amount: BigInt): Sweep {
  let sweepEvent = changetype<Sweep>(newMockEvent())

  sweepEvent.parameters = new Array()

  sweepEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  sweepEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sweepEvent
}

export function createLockedProfitDegradationUpdatedEvent(
  value: BigInt
): LockedProfitDegradationUpdated {
  let lockedProfitDegradationUpdatedEvent = changetype<
    LockedProfitDegradationUpdated
  >(newMockEvent())

  lockedProfitDegradationUpdatedEvent.parameters = new Array()

  lockedProfitDegradationUpdatedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return lockedProfitDegradationUpdatedEvent
}

export function createStrategyAddedEvent(
  strategy: Address,
  debtRatio: BigInt,
  minDebtPerHarvest: BigInt,
  maxDebtPerHarvest: BigInt,
  performanceFee: BigInt
): StrategyAdded {
  let strategyAddedEvent = changetype<StrategyAdded>(newMockEvent())

  strategyAddedEvent.parameters = new Array()

  strategyAddedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  strategyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "debtRatio",
      ethereum.Value.fromUnsignedBigInt(debtRatio)
    )
  )
  strategyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "minDebtPerHarvest",
      ethereum.Value.fromUnsignedBigInt(minDebtPerHarvest)
    )
  )
  strategyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "maxDebtPerHarvest",
      ethereum.Value.fromUnsignedBigInt(maxDebtPerHarvest)
    )
  )
  strategyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "performanceFee",
      ethereum.Value.fromUnsignedBigInt(performanceFee)
    )
  )

  return strategyAddedEvent
}

export function createStrategyReportedEvent(
  strategy: Address,
  gain: BigInt,
  loss: BigInt,
  debtPaid: BigInt,
  totalGain: BigInt,
  totalLoss: BigInt,
  totalDebt: BigInt,
  debtAdded: BigInt,
  debtRatio: BigInt
): StrategyReported {
  let strategyReportedEvent = changetype<StrategyReported>(newMockEvent())

  strategyReportedEvent.parameters = new Array()

  strategyReportedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam("gain", ethereum.Value.fromUnsignedBigInt(gain))
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam("loss", ethereum.Value.fromUnsignedBigInt(loss))
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam(
      "debtPaid",
      ethereum.Value.fromUnsignedBigInt(debtPaid)
    )
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam(
      "totalGain",
      ethereum.Value.fromUnsignedBigInt(totalGain)
    )
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam(
      "totalLoss",
      ethereum.Value.fromUnsignedBigInt(totalLoss)
    )
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDebt",
      ethereum.Value.fromUnsignedBigInt(totalDebt)
    )
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam(
      "debtAdded",
      ethereum.Value.fromUnsignedBigInt(debtAdded)
    )
  )
  strategyReportedEvent.parameters.push(
    new ethereum.EventParam(
      "debtRatio",
      ethereum.Value.fromUnsignedBigInt(debtRatio)
    )
  )

  return strategyReportedEvent
}

export function createUpdateGovernanceEvent(
  governance: Address
): UpdateGovernance {
  let updateGovernanceEvent = changetype<UpdateGovernance>(newMockEvent())

  updateGovernanceEvent.parameters = new Array()

  updateGovernanceEvent.parameters.push(
    new ethereum.EventParam(
      "governance",
      ethereum.Value.fromAddress(governance)
    )
  )

  return updateGovernanceEvent
}

export function createUpdateManagementEvent(
  management: Address
): UpdateManagement {
  let updateManagementEvent = changetype<UpdateManagement>(newMockEvent())

  updateManagementEvent.parameters = new Array()

  updateManagementEvent.parameters.push(
    new ethereum.EventParam(
      "management",
      ethereum.Value.fromAddress(management)
    )
  )

  return updateManagementEvent
}

export function createUpdateRewardsEvent(rewards: Address): UpdateRewards {
  let updateRewardsEvent = changetype<UpdateRewards>(newMockEvent())

  updateRewardsEvent.parameters = new Array()

  updateRewardsEvent.parameters.push(
    new ethereum.EventParam("rewards", ethereum.Value.fromAddress(rewards))
  )

  return updateRewardsEvent
}

export function createUpdateDepositLimitEvent(
  depositLimit: BigInt
): UpdateDepositLimit {
  let updateDepositLimitEvent = changetype<UpdateDepositLimit>(newMockEvent())

  updateDepositLimitEvent.parameters = new Array()

  updateDepositLimitEvent.parameters.push(
    new ethereum.EventParam(
      "depositLimit",
      ethereum.Value.fromUnsignedBigInt(depositLimit)
    )
  )

  return updateDepositLimitEvent
}

export function createUpdatePerformanceFeeEvent(
  performanceFee: BigInt
): UpdatePerformanceFee {
  let updatePerformanceFeeEvent = changetype<UpdatePerformanceFee>(
    newMockEvent()
  )

  updatePerformanceFeeEvent.parameters = new Array()

  updatePerformanceFeeEvent.parameters.push(
    new ethereum.EventParam(
      "performanceFee",
      ethereum.Value.fromUnsignedBigInt(performanceFee)
    )
  )

  return updatePerformanceFeeEvent
}

export function createUpdateManagementFeeEvent(
  managementFee: BigInt
): UpdateManagementFee {
  let updateManagementFeeEvent = changetype<UpdateManagementFee>(newMockEvent())

  updateManagementFeeEvent.parameters = new Array()

  updateManagementFeeEvent.parameters.push(
    new ethereum.EventParam(
      "managementFee",
      ethereum.Value.fromUnsignedBigInt(managementFee)
    )
  )

  return updateManagementFeeEvent
}

export function createUpdateGuardianEvent(guardian: Address): UpdateGuardian {
  let updateGuardianEvent = changetype<UpdateGuardian>(newMockEvent())

  updateGuardianEvent.parameters = new Array()

  updateGuardianEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )

  return updateGuardianEvent
}

export function createEmergencyShutdownEvent(
  active: boolean
): EmergencyShutdown {
  let emergencyShutdownEvent = changetype<EmergencyShutdown>(newMockEvent())

  emergencyShutdownEvent.parameters = new Array()

  emergencyShutdownEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return emergencyShutdownEvent
}

export function createUpdateWithdrawalQueueEvent(
  queue: Array<Address>
): UpdateWithdrawalQueue {
  let updateWithdrawalQueueEvent = changetype<UpdateWithdrawalQueue>(
    newMockEvent()
  )

  updateWithdrawalQueueEvent.parameters = new Array()

  updateWithdrawalQueueEvent.parameters.push(
    new ethereum.EventParam("queue", ethereum.Value.fromAddressArray(queue))
  )

  return updateWithdrawalQueueEvent
}

export function createStrategyUpdateDebtRatioEvent(
  strategy: Address,
  debtRatio: BigInt
): StrategyUpdateDebtRatio {
  let strategyUpdateDebtRatioEvent = changetype<StrategyUpdateDebtRatio>(
    newMockEvent()
  )

  strategyUpdateDebtRatioEvent.parameters = new Array()

  strategyUpdateDebtRatioEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  strategyUpdateDebtRatioEvent.parameters.push(
    new ethereum.EventParam(
      "debtRatio",
      ethereum.Value.fromUnsignedBigInt(debtRatio)
    )
  )

  return strategyUpdateDebtRatioEvent
}

export function createStrategyUpdateMinDebtPerHarvestEvent(
  strategy: Address,
  minDebtPerHarvest: BigInt
): StrategyUpdateMinDebtPerHarvest {
  let strategyUpdateMinDebtPerHarvestEvent = changetype<
    StrategyUpdateMinDebtPerHarvest
  >(newMockEvent())

  strategyUpdateMinDebtPerHarvestEvent.parameters = new Array()

  strategyUpdateMinDebtPerHarvestEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  strategyUpdateMinDebtPerHarvestEvent.parameters.push(
    new ethereum.EventParam(
      "minDebtPerHarvest",
      ethereum.Value.fromUnsignedBigInt(minDebtPerHarvest)
    )
  )

  return strategyUpdateMinDebtPerHarvestEvent
}

export function createStrategyUpdateMaxDebtPerHarvestEvent(
  strategy: Address,
  maxDebtPerHarvest: BigInt
): StrategyUpdateMaxDebtPerHarvest {
  let strategyUpdateMaxDebtPerHarvestEvent = changetype<
    StrategyUpdateMaxDebtPerHarvest
  >(newMockEvent())

  strategyUpdateMaxDebtPerHarvestEvent.parameters = new Array()

  strategyUpdateMaxDebtPerHarvestEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  strategyUpdateMaxDebtPerHarvestEvent.parameters.push(
    new ethereum.EventParam(
      "maxDebtPerHarvest",
      ethereum.Value.fromUnsignedBigInt(maxDebtPerHarvest)
    )
  )

  return strategyUpdateMaxDebtPerHarvestEvent
}

export function createStrategyUpdatePerformanceFeeEvent(
  strategy: Address,
  performanceFee: BigInt
): StrategyUpdatePerformanceFee {
  let strategyUpdatePerformanceFeeEvent = changetype<
    StrategyUpdatePerformanceFee
  >(newMockEvent())

  strategyUpdatePerformanceFeeEvent.parameters = new Array()

  strategyUpdatePerformanceFeeEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  strategyUpdatePerformanceFeeEvent.parameters.push(
    new ethereum.EventParam(
      "performanceFee",
      ethereum.Value.fromUnsignedBigInt(performanceFee)
    )
  )

  return strategyUpdatePerformanceFeeEvent
}

export function createStrategyMigratedEvent(
  oldVersion: Address,
  newVersion: Address
): StrategyMigrated {
  let strategyMigratedEvent = changetype<StrategyMigrated>(newMockEvent())

  strategyMigratedEvent.parameters = new Array()

  strategyMigratedEvent.parameters.push(
    new ethereum.EventParam(
      "oldVersion",
      ethereum.Value.fromAddress(oldVersion)
    )
  )
  strategyMigratedEvent.parameters.push(
    new ethereum.EventParam(
      "newVersion",
      ethereum.Value.fromAddress(newVersion)
    )
  )

  return strategyMigratedEvent
}

export function createStrategyRevokedEvent(strategy: Address): StrategyRevoked {
  let strategyRevokedEvent = changetype<StrategyRevoked>(newMockEvent())

  strategyRevokedEvent.parameters = new Array()

  strategyRevokedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )

  return strategyRevokedEvent
}

export function createStrategyRemovedFromQueueEvent(
  strategy: Address
): StrategyRemovedFromQueue {
  let strategyRemovedFromQueueEvent = changetype<StrategyRemovedFromQueue>(
    newMockEvent()
  )

  strategyRemovedFromQueueEvent.parameters = new Array()

  strategyRemovedFromQueueEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )

  return strategyRemovedFromQueueEvent
}

export function createStrategyAddedToQueueEvent(
  strategy: Address
): StrategyAddedToQueue {
  let strategyAddedToQueueEvent = changetype<StrategyAddedToQueue>(
    newMockEvent()
  )

  strategyAddedToQueueEvent.parameters = new Array()

  strategyAddedToQueueEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )

  return strategyAddedToQueueEvent
}
