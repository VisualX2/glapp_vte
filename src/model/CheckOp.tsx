import { CornerCut } from "../stores/OperationStores/CornerCut";
import { Cut } from "../stores/OperationStores/CutStore";
import { Drill } from "../stores/OperationStores/DrillStore";
import { Radius } from "../stores/OperationStores/RadiusStore";

export const isDrillOp = (op: Cut|Drill|CornerCut|Radius): op is Drill => (op !== undefined && op.type === "drill");
export const isCutOp = (op: Cut|Drill|CornerCut|Radius): op is Cut => (op !== undefined && op.type === "cut");
export const isCornerCutOp = (op: Cut|Drill|CornerCut|Radius): op is CornerCut => (op !== undefined && op.type === "cornercut");
export const isRadiusOp = (op: Cut|Drill|CornerCut|Radius): op is Radius => (op !== undefined && op.type === "radius");