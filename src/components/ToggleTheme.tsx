import { Laptop, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"

export const ToggleTheme = () => {
    const { mode, setMode } = useTheme();

    const options = [
        { value: "light", label: "Light", icon: Sun },
        { value: "dark", label: "Dark", icon: Moon },
        { value: "system", label: "System", icon: Laptop },
    ] as const

    return (
        <TooltipProvider>
            <Popover>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size="sm" aria-label="Change theme" className="cursor-pointer">
                                {mode === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                            </Button>
                        </PopoverTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        Change theme
                    </TooltipContent>
                </Tooltip>
                <PopoverContent className="w-40 p-2 rounded-xl">
                    {options.map(({ value, label, icon: Icon }) => (
                        <Button
                            key={value}
                            variant="ghost"
                            className={cn(
                                "w-full justify-start",
                                mode === value && "bg-accent"
                            )}
                            onClick={() => setMode(value)}
                        >
                            <Icon className="mr-2 h-4 w-4" />
                            {label}
                        </Button>
                    ))}
                </PopoverContent>
            </Popover>
        </TooltipProvider>
    )
}