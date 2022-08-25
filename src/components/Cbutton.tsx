import { IconProps} from "phosphor-react";

interface IButtonProps {
    title: string;
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> | any;
}

export function Cbutton({title, icon}: IButtonProps) {
    return (
        <div>
            <button
                type="submit"
                className="
                bg-blue-600 
                py-2
                w-full 
                rounded-md 
                mt-4
                hover:bg-blue-500"
            >
                <p className="flex justify-center items-center">
                {icon} {title}
                </p>
               
            </button>
        </div>
    );
}