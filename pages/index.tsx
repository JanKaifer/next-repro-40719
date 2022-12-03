
export default function Page() {
    const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n))
    const scrollToTop = async () => {
        document.documentElement.style.scrollBehavior = "smooth"
        document.documentElement.style.scrollBehavior = "auto"
        console.log("auto")
        window.scrollTo(0, 0)
        // setTimeout(() => { console.log("shooth") }, 1000)
    }

    return <div style={{ height: 10000 }}>
        <button onClick={scrollToTop} style={{ marginTop: 9900 }}>to top</button>
    </div>;
}