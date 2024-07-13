export default function Layout({
    children,
    resume,
    analytics,
    modal
}: {
    children: React.ReactNode,
    resume: React.ReactNode,
    analytics: React.ReactNode,
    modal :React.ReactNode,
}) {
    return (
        <>
            {children}
            {resume}
            {analytics}
            {modal}
        </>
    )
}