import DownloadButtons from "./DownloadButtons";

const CallToAction = () => (
    <section className="text-center py-20 text-white">
        <h2 className="text-3xl font-bold">🚀 Ready to Stick-It?</h2>
        <p className="text-lg mt-2">Download now and start discovering stickers worldwide!</p>
        <DownloadButtons centered={true} />
    </section>
);

export default CallToAction;