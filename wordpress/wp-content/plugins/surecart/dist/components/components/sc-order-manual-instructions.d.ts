import type { Components, JSX } from "../types/components";

interface ScOrderManualInstructions extends Components.ScOrderManualInstructions, HTMLElement {}
export const ScOrderManualInstructions: {
    prototype: ScOrderManualInstructions;
    new (): ScOrderManualInstructions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
