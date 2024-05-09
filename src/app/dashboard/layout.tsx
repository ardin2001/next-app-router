export default function layout({ children,analytics,resume,dev }: {
    children: React.ReactNode,
    analytics :React.ReactNode,
    resume : React.ReactNode,
    dev :React.ReactNode,
}) {
    return (
        <div>
            {children}
            {analytics}
            {resume}
            {dev}
        </div>
    )
}