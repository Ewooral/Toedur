import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoMdArrowDropright } from "react-icons/io"
import { FormattedMessage } from "react-intl"

export function ToedurPopOver() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className="flex justify-start items-center text-blue-500 my-2"
                    variant="outline">
                    <FormattedMessage
                        id="learn_more"
                        defaultMessage="Learn more"
                    />
                    <IoMdArrowDropright className="size-5" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 bg-white rounded-lg shadow-lg">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none text-lg">Become an Edur</h4>
                        <p className="text-sm text-gray-600">
                            Embark on a transformative journey to become a mentor and role model. Follow these steps to make a meaningful impact:
                        </p>
                    </div>
                    <div className="grid gap-2 text-sm text-gray-700">
                        <div className="space-y-1">
                            <h5 className="font-semibold">1. Self-Reflection</h5>
                            <p>Assess your skills, experiences, and the value you can offer.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">2. Continuous Learning</h5>
                            <p>Stay updated with the latest trends and enhance your expertise.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">3. Engage and Connect</h5>
                            <p>Build strong relationships within the community and network with others.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">4. Mentorship and Guidance</h5>
                            <p>Provide support and share your journey to inspire others.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">5. Lead by Example</h5>
                            <p>Demonstrate integrity and a commitment to growth.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">6. Give Back to the Community</h5>
                            <p>Contribute to projects and volunteer your expertise.</p>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}



export function ToedurPopOverA() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className="flex justify-start items-center text-blue-500 my-2"
                    variant="outline">
                    <FormattedMessage
                        id="learn_more"
                        defaultMessage="Learn more"
                    />
                    <IoMdArrowDropright className="size-5" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 bg-white rounded-lg shadow-lg">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none text-lg">Find Your Edur</h4>
                        <p className="text-sm text-gray-600">
                            Discover your unique path, purpose, and passion by following these steps:
                        </p>
                    </div>
                    <div className="grid gap-2 text-sm text-gray-700">
                        <div className="space-y-1">
                            <h5 className="font-semibold">1. Self-Discovery</h5>
                            <p>Identify your strengths, weaknesses, interests, and values.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">2. Passion and Purpose</h5>
                            <p>Find activities that excite you and understand what drives you.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">3. Continuous Learning</h5>
                            <p>Embrace lifelong learning and stay curious.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">4. Goal Setting</h5>
                            <p>Set achievable short-term goals and have a clear long-term vision.</p>
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-semibold">5. Personal Growth</h5>
                            <p>Develop a growth mindset and resilience to navigate challenges.</p>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}