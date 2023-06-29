import { observer } from "mobx-react";
import { Group} from "react-konva";

import { DrillRender } from "./DrillRender";
import { CornerRender } from "./CornerRender";

export const OperationRender = observer(() => {


    return(
        <Group>
            <DrillRender></DrillRender>
            <CornerRender></CornerRender>
        </Group>
    )
})