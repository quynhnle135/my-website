"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7798],{1609:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(5893),a=n(1151);const r={title:"Nov 27, 2023"},i="Coding Journal: Nov 27, 2023",l={id:"learning-journal/November/20231127",title:"Nov 27, 2023",description:"- Review how to write tests in Python again.",source:"@site/docs/learning-journal/November/20231127.md",sourceDirName:"learning-journal/November",slug:"/learning-journal/November/20231127",permalink:"/my-website/docs/learning-journal/November/20231127",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Nov 27, 2023"},sidebar:"tutorialSidebar",previous:{title:"Nov 26, 2023",permalink:"/my-website/docs/learning-journal/November/20231126"},next:{title:"Nov 28, 2023",permalink:"/my-website/docs/learning-journal/November/20231128"}},o={},c=[{value:"Fixed crontab task scheduler and the script it runs",id:"fixed-crontab-task-scheduler-and-the-script-it-runs",level:3},{value:"How to write tests",id:"how-to-write-tests",level:3}];function _(t){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"coding-journal-nov-27-2023",children:"Coding Journal: Nov 27, 2023"}),"\n",(0,s.jsx)(e.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Review how to write tests in Python again."}),"\n",(0,s.jsx)(e.li,{children:"Review mock and patch in unittests."}),"\n",(0,s.jsx)(e.li,{children:"Fixed crontab task scheduler and the script it runs."}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"How to write test beter?"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,s.jsx)(e.h3,{id:"fixed-crontab-task-scheduler-and-the-script-it-runs",children:"Fixed crontab task scheduler and the script it runs"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"For the context, I created a cron job to make it add songs from Daylist every 3 hour to the choosen playlist. However, I checked it the first thing in the morning and the choosen playlist was still empty, which means the command line just never runs."}),"\n",(0,s.jsxs)(e.li,{children:["When it comes to assign tasks for the crontab, there are few things that I need to make sure:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Permission to excute code or access the file that you want to work with. For this case, I made sure that the script is able to execute by giving its permission (chmod +x filename)"}),"\n",(0,s.jsxs)(e.li,{children:["With the script (.sh file), I should write the shebang ",(0,s.jsx)(e.code,{children:"#!/bin/bash"})," at first to specify the interpreter and script probability."]}),"\n",(0,s.jsxs)(e.li,{children:["In the script, because I have to execute code from a Python module, I have to declare the Python version and its path to able to run the code. By writing ",(0,s.jsx)(e.code,{children:"which python3"}),", I give the script the PATH for Python3 environment."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"After fixing my script, I tried to run the command where it adds the same song to a choosen playlist every minute and it works. Therefore, I was able to edit my crontab and make it run the command I want."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"how-to-write-tests",children:"How to write tests"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I wrote one test for each function I write in the project but the test coverage shows that it covers only 33%"}),"\n",(0,s.jsx)(e.li,{children:"I struggled with how to write a test based on the function that I need to test on. I follow the structure Arrange-Act-Assert and using mock for most tests."}),"\n",(0,s.jsx)(e.li,{children:"However, I use mock and patch in most of my tests but I don't thoroughly understand their purposes."}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,s.jsx)(e.p,{children:"Script file:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:'#!/bin/bash\n\n/Library/Frameworks/Python.framework/Versions/3.11/bin/python3 /Users/quinnle/PycharmProjects/spotify-discover-weekly-playlist/main.py -ad "https://open.spotify.com/playlist/67fRWrYNLNRQ4Z0az53tVH?si=e99c5cdc0df545c6"\n\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="test_automate_spotify.py"',children:'import unittest\nfrom unittest.mock import patch\nfrom automate_spotify import *\n\n\nclass TestAutomateSpotiy(unittest.TestCase):\n    @patch(\'automate_spotify.sp.current_user\')\n    def test_view_user_info_1(self, mock_current_user):\n        # Arrange\n        mock_current_user_data = {\n            "display_name": "John Doe",\n            "followers": {\n                "total": 100\n            }\n        }\n        mock_current_user.return_value = mock_current_user_data\n        # Act\n        user = view_user_info()\n        # Assert\n        self.assertEqual(user["display_name"], "John Doe")\n        self.assertEqual(user["followers"]["total"], 100)\n\n    @patch(\'automate_spotify.sp.current_user\')\n    def test_view_user_info_2(self, mock_current_user):\n        mock_current_user_data = {"display_name": "Jane Smith", "followers": {"total": 50}}\n        mock_current_user.return_value = mock_current_user_data\n\n        with patch("builtins.print") as mock_print:\n            user = view_user_info()\n\n        mock_print.assert_any_call("--User Info--")\n        mock_print.assert_any_call("Name:", "Jane Smith")\n        mock_print.assert_any_call("Total followers:", 50)\n        self.assertEqual(user, mock_current_user_data)\n\n    @patch(\'automate_spotify.sp.current_user_playlists\')\n    def test_view_user_playlist(self, mock_current_user_playlist):\n        # Arrange\n        mock_current_user_playlist_data = {\n            "items": [{\n                "name": "Mock Playlist Name",\n                "id": "Mock ID",\n                "description": "Mock description",\n                "tracks": {\n                    "total": 100\n                }\n            }]\n        }\n        mock_current_user_playlist.return_value = mock_current_user_playlist_data\n        # Act\n        with patch("builtins.print") as mock_print:\n            user_playlists = view_user_playlists()\n        # Assert\n        mock_print.assert_any_call("--User Current Playlists--")\n        mock_print.assert_any_call("Playlist\'s name:", "Mock Playlist Name")\n        mock_print.assert_any_call("Playlist\'s ID:", "Mock ID")\n        mock_print.assert_any_call("Playlist\'s description:", "Mock description")\n        mock_print.assert_any_call("Total tracks:", 100)\n        self.assertEqual(user_playlists, mock_current_user_playlist_data)\n\n    @patch(\'automate_spotify.sp.current_user_saved_tracks\')\n    def test_view_user_saved_tracks(self, mock_current_user_saved_tracks):\n        # Arrange\n        mock_current_user_saved_tracks_data = {\n            "items": [\n                {\n                    "track": {\n                        "name": "Mock name",\n                        "album": {"name": "Mock album name"},\n                        "artists": [{"name": "Mock artist name"}]\n                    }\n                }\n            ]\n        }\n        mock_current_user_saved_tracks.return_value = mock_current_user_saved_tracks_data\n        # Act\n        with patch("builtins.print") as mock_print:\n            user_saved_tracks = view_user_saved_tracks(amount=1)\n        # Arrange\n        mock_print.assert_any_call("--User Current Saved Tracks--")\n        mock_print.assert_any_call("Track\'s name:", "Mock name")\n        mock_print.assert_any_call("Track\'s album:", "Mock album name")\n        mock_print.assert_any_call("Track\'s artist:", "Mock artist name")\n        self.assertEqual(user_saved_tracks, mock_current_user_saved_tracks_data)\n\n    @patch(\'automate_spotify.sp.playlist\')\n    def test_view_weekly_discovery_tracks(self, mock_playlist):\n        # Arrange\n        mock_playlist_data = {\n            "tracks": {\n                "items": [\n                    {"track": {\n                        "name": "Mock track name",\n                        "artists": [{"name": "Mock artist name"}],\n                        "id": "Mock ID"\n                    }}\n                ]\n            }\n        }\n        mock_playlist.return_value = mock_playlist_data\n        # Act\n        with patch("builtins.print") as mock_print:\n            weekly_playlist = view_weekly_discovery_tracks()\n        # Assert\n        mock_print.assert_any_call("---Discover Weekly Tracks---")\n        mock_print.assert_any_call("Track\'s name:", "Mock track name")\n        mock_print.assert_any_call("Artist:", "Mock artist name")\n        mock_print.assert_any_call("Track\'s ID:", "Mock ID")\n        self.assertEqual(weekly_playlist, mock_playlist_data)\n\n    @patch(\'automate_spotify.sp.playlist\')\n    def test_view_day_list_tracks(self, mock_playlist):\n        # Arrange\n        mock_playlist_data = {\n            "tracks": {\n                "items": [\n                    {"track": {\n                        "name": "Mock track name",\n                        "artists": [{"name": "Mock artist name"}],\n                        "album": {"name": "Mock album name"}\n                    }}\n                ]\n            }\n        }\n        mock_playlist.return_value = mock_playlist_data\n        # Act\n        with patch("builtins.print") as mock_print:\n            user_day_list_playlist = view_day_list_tracks()\n        # Assert\n        mock_print.assert_any_call("---Current Day List Tracks---")\n        mock_print.assert_any_call("Name:", "Mock track name")\n        mock_print.assert_any_call("Artist:", "Mock artist name")\n        mock_print.assert_any_call("Album:", "Mock album name")\n        self.assertEqual(user_day_list_playlist, mock_playlist_data)\n\n    @patch(\'automate_spotify.sp.current_user_playlists\')\n    @patch(\'automate_spotify.sp.current_user\')\n    @patch(\'automate_spotify.sp.user_playlist_create\')\n    def test_create_playlist_successful(self, mock_user_playlist_create, mock_current_user, mock_current_user_playlists):\n        mock_current_user_data = {"id": "mock id"}\n        mock_current_user.return_value = mock_current_user_data\n        mock_user_playlist_create_data = {\'collaborative\': False,\n                                          \'description\': \'\',\n                                          \'external_urls\': {\'spotify\': \'mock spotify\'},\n                                          \'followers\': {\'href\': None, \'total\': 0},\n                                          \'href\': \'mock href\',\n                                          \'id\': \'mock id\',\n                                          \'images\': [],\n                                          \'name\': \'mock name\',\n                                          \'owner\': {\'display_name\': \'mock owner name\',\n                                                    \'external_urls\': {\'spotify\': \'mock spotify\'},\n                                                    \'href\': \'mock href\',\n                                                    \'id\': \'mock id\',\n                                                    \'type\': \'user\',\n                                                    \'uri\': \'mock uri\'},\n                                          \'primary_color\': None,\n                                          \'public\': True,\n                                          \'snapshot_id\': \'mock snapshot id\',\n                                          \'tracks\': {\'href\': \'mock href\',\n                                                     \'items\': [],\n                                                     \'limit\': 100,\n                                                     \'next\': None,\n                                                     \'offset\': 0,\n                                                     \'previous\': None,\n                                                     \'total\': 0},\n                                          \'type\': \'playlist\',\n                                          \'uri\': \'mock uri\'}\n        mock_user_playlist_create.return_value = mock_user_playlist_create_data\n        with patch("builtins.print") as mock_print:\n            new_playlist = create_playlist(name="mock name", description="")\n        mock_print.assert_any_call("Playlist mock name has been created")\n        self.assertEqual(new_playlist, mock_user_playlist_create_data)\n\n    @patch(\'automate_spotify.sp.current_user_playlists\')\n    @patch(\'automate_spotify.sp.current_user\')\n    def test_create_playlist_fail(self, mock_current_user, mock_current_user_playlists):\n        mock_current_user_data = {"id": "mock user id"}\n        mock_current_user.return_value = mock_current_user_data\n        mock_current_user_playlists_data = {\n            "items": [\n                {"name": "mock name"}\n            ]\n        }\n        mock_current_user_playlists.return_value = mock_current_user_playlists_data\n        with patch("builtins.print") as mock_print:\n            new_playlist = create_playlist(name="mock name", description="")\n        mock_print.assert_any_call("Playlist name already exists. Please choose another one")\n        self.assertEqual(new_playlist, None)\n\n    @patch(\'automate_spotify.sp.playlist_add_items\')\n    def test_add_songs_to_playlist(self, mock_playlist_add_items):\n        mock_playlist_add_items_data = {\n            "snapshot_id": "mock snapshot_id"\n        }\n        mock_playlist_add_items.return_value = mock_playlist_add_items_data\n        with patch("builtins.print") as mock_print:\n            playlist = add_songs_to_playlist(playlist_id="mock playlist_id", items=["mock song"])\n        mock_print.assert_any_call("Songs have been added to the playlist.")\n        self.assertEqual(playlist, mock_playlist_add_items_data)\n\n    # @patch(\'automate_spotify.sp.playlist_items\')\n    # @patch(\'automate_spotify.sp.playlist_add_items\')\n    # def test_add_songs_from_weekly_playlist(self, mock_playlist_items, mock_playlist_add_items):\n    #     # Define the mock return values for playlist items\n    #     mock_playlist_items.return_value = {\n    #         "items": [\n    #             {"track": {"id": "track1_id"}},\n    #             {"track": {"id": "track2_id"}},\n    #             {"track": {"id": "track3_id"}}\n    #         ]\n    #     }\n    #     mock_playlist_add_items.return_value = "Mocked playlist add items response"\n    #\n    #     # Call the function with a test playlist ID\n    #     test_playlist_id = "test_playlist_id"\n    #     result = add_songs_from_weekly_playlist(test_playlist_id)\n    #\n    #     # Assert that playlist_items was called with the correct URL\n    #     mock_playlist_items.assert_called_once_with(\n    #         playlist_id="https://open.spotify.com/playlist/37i9dQZEVXcSl5JcFboUlo")\n    #\n    #     # Assert that playlist_add_items was called with the correct arguments\n    #     mock_playlist_add_items.assert_called_once_with(playlist_id=test_playlist_id,\n    #                                                     items=["track1_id", "track2_id", "track3_id"])\n    #\n    #     # Assert the function returned the mocked response\n    #     self.assertEqual(result, "Mocked playlist add items response")\n\n\nif __name__ == "__main__":\n    unittest.main()\n'})})]})}function m(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(_,{...t})}):_(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);