const DownloadButtons = ({ centered = false }) => (
    <div className={`mt-6 flex space-x-4 ${centered ? "justify-center" : ""}`}>
      <a
        href="https://apps.apple.com/de/app/stick-it-map/id6446781455"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white px-6 py-3 text-black rounded-lg font-semibold hover:bg-gray-200"
      >
        Download for iOS
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.TheGermanApps.buff_lisa"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white px-6 py-3 text-black rounded-lg font-semibold hover:bg-gray-200"
      >
        Download for Android
      </a>
    </div>
  );
  
  export default DownloadButtons;
  