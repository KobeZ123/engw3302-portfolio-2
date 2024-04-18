import spotifyChooseTopArtists from "./../../../public/spotify-choose-top-artists.png";
import spotifyLoadingIndicator from "./../../../public/spotify-loading-indicator.png";
import spotifyPlaylistCreated from "./../../../public/spotify-playlist-created.png";
import spotifySelectingArtists from "./../../../public/spotify-selecting-artists.png";
import spotifyTopItems from "./../../../public/spotify-top-items.png";
import spotifyVibes from "./../../../public/spotify-vibes.png";

export default function SpotifyProject() {
    return (
        <div className="w-[960px] max-w-[90vw] my-16">
            <div className="flex flex-row w-full justify-start">
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    className="hover:text-red-600"
                    >
                    <p className="font-bold">Back</p>
                </button>
            </div>
            <div className="flex flex-col items-center select-none text-left">
                <h2 className="font-bold my-8">Spotify Interval Playlist Maker</h2>
                <h3>Tech Stack: React, TypeScript, Axios</h3>
                <div className="flex flex-col items-center my-4 w-full">
                    <a href="https://kobe-spotify-playlist-maker.vercel.app/" target="_blank" className="text-lg text-green-600 font-bold underline">Link to Website</a>
                    <p className="text-sm italic w-[600px] text-center">Note: Due to limitations of the Spotify API, only Spotify accounts whose emails are added to a list are able to login and try the application.</p>
                </div>
                <a href="https://github.com/KobeZ123/spotify-playlist-maker" target="_blank" className="text-lg text-green-600 font-bold underline">Link to Project</a>

                <section className="flex flex-col w-full max-w-[700px] items-start my-2">
                    <h4 className="underline font-semibold my-4">Project Description</h4>
                    <p className="indent-8">The Spotify Interval Playlist Maker is a web application that allows a user to view their music listening profile and automatically generate an interval playlists based on recommendations selected by the user.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-2">
                    <h4 className="font-semibold my-4">What is an interval playlist?</h4>
                    <p className="indent-8">An interval is defined as the amount of time between two given points in time. An interval playlist is a collection of songs that total to a specific duration of time.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Background</h4>
                    <p className="indent-8">Almost everyone enjoys music. As an avid Spotify user, I enjoy making playlists curated for specific moods and situations. As I was first working on expanding my skills in web development, I wanted to utilize the Spotify API to build a web app. I worked closely with a designer to get simple designs to implement. This is the result of the initial passion project. Whether it is for those hour-long workout sessions or those those long road trips, the Spotify Interval Playlist Maker creates playlists of the perfect duration for any needs.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">How It Works</h4>
                    <h4 className="text-lg font-bold">Top Items Page</h4>
                    <p className="indent-8 my-2">The Top Items page shows the user's music profile, fetching information about the user's top artists and tracks for the past months, past 6 months, and all time.</p>
                    <h4 className="text-lg font-bold">Interval Playlist Maker Page</h4>
                    <p className="indent-8 my-2">The interval playlist maker will automatically generate a playlist that is added to the user's Spotify library after calibrating with a few parameters. The user is asked to select some artists, tracks, and genres that they want the playlist to match. The user will also name their playlist and input how long they want it to be. Then, the playlist will be generated.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-center my-4">
                    <h4 className="underline font-semibold my-4">Project Images</h4>
                    <div className="flex flex-col my-4">
                        <img src={spotifyTopItems} alt="Spotify top items" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <p className="text-center">The top items page is a tabbed component where the user can view their current music preferences or their all-time favorites</p>
                    </div>
                    <p className="text-center">~</p>

                    <div className="flex flex-col my-4">
                        <img src={spotifyChooseTopArtists} alt="Spotify choose top artists page" className="w-[700px] h-auto my-4 border-4 border-white"/>
                        <img src={spotifySelectingArtists} alt="Spotify selecting top artists page" className="w-[700px] h-auto my-4 border-4 border-white"/>
                        <p className="text-center">When creating an interval playlist, the user is guided through a paginated form where they choose artists, tracks, and genres to match their vibes. These screenshots feature the artist selection, where the user can search for artists that they want to inspire their playlist. To make the decision easier, some of the user's top artists are recommended here. I aimed to make the interface for adding artists to and removing artists from this selection is simple and intuitive.</p>
                        <img src={spotifyVibes} alt="Spotify selecting genres page" className="w-[700px] h-auto my-4 border-4 border-white"/>
                        <p className="text-center">Here, the user selects genres that they want the playlist to be built around.</p>

                    </div>

                    <p className="text-center">~</p>

                    <div className="flex flex-col my-4">
                        <img src={spotifyLoadingIndicator} alt="Spotify loading indicators" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <p className="text-center">Throughout the web app, I tried to enhance the user experience by building out quality-of-life improvements like these loading indicators so the user knows that the recommendations are being fetched for them.</p>
                    </div>

                    <p className="text-center">~</p>

                    <div className="flex flex-col my-4">
                        <img src={spotifyPlaylistCreated} alt="Spotify playlist created" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <p className="text-center">Finally, the user lands on a page that will show that their playlist has been created. Since the user is logged in, this playlist is added to the user's library for their listening convenience.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}