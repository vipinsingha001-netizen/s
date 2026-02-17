import React, { useEffect, useState } from 'react';

const APP_DOWNLOAD_URL = '/app.apk';

const DownloadApp = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = APP_DOWNLOAD_URL;
    link.download = 'app.apk';
    link.click();
  };

  useEffect(() => {
    // Attempt auto-download after slight delay
    const timer = setTimeout(() => {
      triggerDownload();
      setDownloadStarted(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <h2 className="text-2xl font-bold mb-4">Downloading the App...</h2>

      <p className="mb-4">
        {downloadStarted
          ? 'Your download should have started automatically.'
          : 'Preparing your download...'}
      </p>

      <button
        onClick={triggerDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Manually
      </button>

      <a
        href={APP_DOWNLOAD_URL}
        download="app.apk"
        className="mt-3 text-blue-600 underline"
      >
        Direct link (if button doesn’t work)
      </a>
    </div>
  );
};

export default DownloadApp;
