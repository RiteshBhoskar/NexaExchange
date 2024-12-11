

export  function AuthButton({children , onClick }: {
    children: React.ReactNode;
    onClick: () => void
}) {
    return (
        <div>
            <button type="button" onClick={onClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2">
                {children}
            </button>
        </div>
    )
}


export  function HeroAuthButton ({ children , onClick , prefix } : {
    children: React.ReactNode;
    onClick: () => void;
    prefix?: React.ReactNode;
}) {
    return (
        <button type="button" onClick={onClick} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <div>
                {prefix}
                {children}
            </div>
        </button>
    )
}