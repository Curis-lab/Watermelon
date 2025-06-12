import type { ReactNode, ReactElement } from 'react';

interface IConditionallyRenderProps {
    condition: boolean;
    show: TargetElement;
    elseShow?: TargetElement;
}

type TargetElement =
    | ReactElement
    | ReactElement[]
    | RenderFunc
    | ReactNode
    | null;

type RenderFunc = () => ReactElement;

export const ConditionallyRender = ({
    condition,
    show,
    elseShow,
}: IConditionallyRenderProps): ReactElement | null => {
    const handleFunction = (renderFunc: RenderFunc): ReactElement | null => {
        const result = renderFunc();
        if (!result) {
            /* eslint-disable-next-line */
            console.warn(
                'Nothing was returned from your render function. Verify that you are returning a valid react component',
            );
            return null;
        }
        return result;
    };

    const isFunc = (param: TargetElement): boolean => {
        return typeof param === 'function';
    };

    if (condition) {
        if (isFunc(show)) {
            return handleFunction(show as RenderFunc);
        }

        return show as ReactElement;
    }
    if (!condition && elseShow) {
        if (isFunc(elseShow)) {
            return handleFunction(elseShow as RenderFunc);
        }
        return elseShow as ReactElement;
    }
    return null;
};
