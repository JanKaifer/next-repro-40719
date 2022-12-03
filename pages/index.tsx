
export default function Page() {
    const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n))
    const scrollToTop = async () => {
        document.documentElement.style.scrollBehavior = "smooth"
        document.documentElement.style.scrollBehavior = "auto"
        console.log("auto")
        window.scrollTo(0, 0)
        // setTimeout(() => { console.log("shooth") }, 1000)
    }

    return <div>
        <section />
        <button onClick={scrollToTop}>to top</button>
    </div>;
}