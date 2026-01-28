// Control type definitions for component customization
export type ControlValue = string | number | boolean;

export type Control =
    | { type: 'text'; label: string; defaultValue: string; prop: string }
    | { type: 'number'; label: string; defaultValue: number; min?: number; max?: number; step?: number; prop: string }
    | { type: 'boolean'; label: string; defaultValue: boolean; prop: string }
    | { type: 'select'; label: string; options: string[]; defaultValue: string; prop: string }
    | { type: 'color'; label: string; defaultValue: string; prop: string };

export interface ComponentControlConfig {
    componentId: string;
    controls: Control[];
}

export const componentControls: Record<string, Control[]> = {
    'glitch-text': [
        { type: 'text', label: 'Text', defaultValue: 'CYBERPUNK', prop: 'text' },
        { type: 'text', label: 'Class Name', defaultValue: 'text-4xl font-bold', prop: 'className' },
    ],
    'gradient-border': [
        { type: 'select', label: 'Gradient', defaultValue: 'from-red-500 to-yellow-500', options: ['from-red-500 to-yellow-500', 'from-blue-400 to-purple-500', 'from-teal-500 to-indigo-500', 'from-green-500 to-blue-500',], prop: 'gradient' },
        { type: 'number', label: 'Border Width', defaultValue: 4, min: 1, max: 10, step: 1, prop: 'borderWidth' },
        { type: 'number', label: 'Duration (s)', defaultValue: 3, min: 1, max: 20, step: 0.5, prop: 'duration' },
        { type: 'number', label: 'Radius', defaultValue: 24, min: 0, max: 50, step: 2, prop: 'borderRadius' },
    ],
    'text-shimmer': [
        { type: 'text', label: 'Text', defaultValue: 'Loading premium experience...', prop: 'children' },
        { type: 'text', label: 'Class Name', defaultValue: 'font-mono text-xl', prop: 'className' },
        { type: 'number', label: 'Duration (s)', defaultValue: 3, min: 1, max: 10, step: 0.1, prop: 'duration' },
    ],
    'text-reveal': [
        { type: 'text', label: 'Text', defaultValue: 'Motion driven experiences that delight your users.', prop: 'text' },
        { type: 'text', label: 'Class Name', defaultValue: '', prop: 'className' },
        { type: 'number', label: 'Duration (s)', defaultValue: 0.5, min: 0.1, max: 2, step: 0.1, prop: 'duration' },
    ],
    'spotlight-card': [
        { type: 'color', label: 'Spotlight Color', defaultValue: '#b928e2', prop: 'spotlightColor' },
        { type: 'number', label: 'Radius', defaultValue: 360, min: 200, max: 1200, step: 50, prop: 'spotlightRadius' },
    ],
    'gravity-text': [
        { type: 'text', label: 'Text', defaultValue: 'GRAVITY', prop: 'text' },
        { type: 'text', label: 'Class Name', defaultValue: 'text-4xl', prop: 'className' },
        { type: 'select', label: 'Font Weight', defaultValue: 'font-bold', options: ['font-bold', 'font-medium', 'font-normal', 'font-light', 'font-thin'], prop: 'font' },
        { type: 'number', label: 'Duration', defaultValue: 0.5, min: 0.1, max: 5, step: 0.1, prop: 'duration' },
        { type: 'number', label: 'Stiffness', defaultValue: 400, min: 50, max: 1000, step: 10, prop: 'stiffness' },
    ],
    'ripple-button': [
        { type: 'text', label: 'Button Text', defaultValue: 'Click Me', prop: 'children' },
        { type: 'boolean', label: 'Disabled', defaultValue: false, prop: 'disabled' },
    ],
    'neon-button': [
        { type: 'text', label: 'Button Text', defaultValue: 'Neon Glow', prop: 'children' },
        { type: 'boolean', label: 'Disabled', defaultValue: false, prop: 'disabled' },
    ],
    'glow-button': [
        { type: 'text', label: 'Button Text', defaultValue: 'Hover Me', prop: 'children' },
    ],
    'bento-grid': [
        { type: 'text', label: 'Class Name', defaultValue: '', prop: 'className' },
    ],
    'lamp': [
        { type: 'text', label: 'Class Name', defaultValue: '', prop: 'className' },
    ],
    'infinite-moving-cards': [
        { type: 'select', label: 'Speed', defaultValue: 'normal', options: ['fast', 'normal', 'slow'], prop: 'speed' },
        { type: 'select', label: 'Direction', defaultValue: 'left', options: ['left', 'right'], prop: 'direction' },
        { type: 'boolean', label: 'Pause on Hover', defaultValue: true, prop: 'pauseOnHover' },
        { type: 'select', label: 'Gap', defaultValue: 'normal', options: ['small', 'normal', 'large'], prop: 'gap' },
        { type: 'color', label: 'Background Color', defaultValue: '#09090b', prop: 'backgroundColor' },
        { type: 'color', label: 'Text Color', defaultValue: '#ffffff', prop: 'textColor' },
        { type: 'color', label: 'Sub-text Color', defaultValue: '#a1a1aa', prop: 'subTextColor' },
    ],
};
