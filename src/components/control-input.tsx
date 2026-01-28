"use client";

import { Control, ControlValue } from "@/config/component-controls";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ControlInputProps {
    control: Control;
    value: ControlValue;
    onChange: (value: ControlValue) => void;
}

export function ControlInput({ control, value, onChange }: ControlInputProps) {
    switch (control.type) {
        case 'text':
            return (
                <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">{control.label}</Label>
                    <Input
                        type="text"
                        value={value as string}
                        onChange={(e) => onChange(e.target.value)}
                        className="h-8 text-sm"
                    />
                </div>
            );

        case 'number':
            return (
                <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">{control.label}</Label>
                    <Input
                        type="number"
                        min={control.min}
                        max={control.max}
                        step={control.step || 1}
                        value={value as number}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="h-8 text-sm"
                    />
                </div>
            );

        case 'boolean':
            return (
                <div className="flex items-center justify-between py-2">
                    <Label className="text-xs text-muted-foreground">{control.label}</Label>
                    <Switch
                        checked={value as boolean}
                        onCheckedChange={onChange}
                    />
                </div>
            );

        case 'select':
            return (
                <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">{control.label}</Label>
                    <Select value={value as string} onValueChange={onChange}>
                        <SelectTrigger className="h-8 text-sm">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {control.options.map((option) => (
                                <SelectItem key={option} value={option} className="text-sm">
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            );

        case 'color':
            return (
                <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">{control.label}</Label>
                    <div className="flex gap-2">
                        <Input
                            type="color"
                            value={value as string}
                            onChange={(e) => onChange(e.target.value)}
                            className="h-8 w-12 p-1"
                        />
                        <Input
                            type="text"
                            value={value as string}
                            onChange={(e) => onChange(e.target.value)}
                            className="h-8 flex-1 text-sm font-mono"
                        />
                    </div>
                </div>
            );
    }
}
