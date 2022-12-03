
export default function Page() {
    const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n))
    const scrollToTop = async () => {
        document.documentElement.style.scrollBehavior = "auto"
        document.documentElement.getClientRects()
        window.scrollTo(0, 0)
    }

    return <div>
        <section />
        <button onClick={scrollToTop}>to top</button>
    </div>;
}