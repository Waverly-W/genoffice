# GenOffice Privacy

Last updated: October 19, 2026

GenOffice opens, edits, saves and converts documents locally. It has no
account, no sign-in and no cloud storage: your files are never uploaded to
GenOffice or to anyone else by the editors. The only data the app sends on its
own is the anonymous usage analytics described below, which you can turn off.

## Usage analytics

Usage analytics is enabled by default in packaged official builds, including
the initial app launch before the onboarding notice is shown. Onboarding
explains what is collected and where to turn it off.

You can disable reporting at any time under **Settings → General → Send
anonymous usage statistics**. The setting is checked before every event, so an
opt-out applies immediately, is remembered, and stops all subsequent analytics
events.

### Events and parameters

When enabled, the app sends these events:

- `install_first_launch` — marks the first analytics-enabled use of a newly
  assigned anonymous `client_id`; used for retention cohorts
- `app_launch` — no event-specific parameter
- `file_open` — `ext`, the file extension such as `docx` or `xlsx`
- `file_new` — `kind`, one of `docx`, `xlsx`, `pptx`, `md`, `html`, or `pdf`

Every event includes:

- `app_version`
- `platform`
- `os_version`
- `ui_lang`
- a per-process `session_id` derived from the process start time
- `engagement_time_msec` with the fixed value `100`

When available, the payload also includes `country_id`, the two-letter country
code from the operating system's regional locale. This can differ from the
user's physical location.

The Google Analytics 4 payload also uses a random install UUID as `client_id`,
generated on first use and stored in the app's local settings file. The country
code is sent through GA4's country-only `user_location` field; the app does not
send a city or region. Neither identifier is tied to a person, an account or an
email address.

## Network information

Events are sent to Google Analytics 4 using the Measurement Protocol over
HTTPS. As the HTTPS recipient, Google necessarily sees the connection's public
IP address and transport metadata, and may use them for coarse geolocation and
security or spam-abuse processing. GenOffice does not add an IP address to the
event payload. Sends are fire-and-forget with a short timeout; a failed send is
dropped and never affects the app.

## Data not collected by analytics

GenOffice analytics never sends:

- document content
- file names
- file paths
- account identity
- email addresses

The analytics metadata is injected only into packaged official builds and is
not part of this repository. Source builds and forks without that packaged
metadata install a no-op tracker and send no usage analytics; all features work
the same.

## Other network requests

A few features reach the network when they run, and send no document content:

- **Updates.** Official builds check GitHub Releases for a newer version on the
  update channel chosen in **Settings → About**, and download it from there.
- **About pane.** Settings → About fetches the project's public star count from
  the GitHub API.
- **Downloadable fonts.** Picking a downloadable font family in Slides fetches
  that font file from the font CDN.
- **Markdown image hosts.** Only if you configure an image host in the Markdown
  editor, pasted and dropped pictures are uploaded to the storage you chose
  (S3-compatible, SM.MS or GitHub) with the credentials you entered.
- **Links you open.** Hyperlinks and the community page open in your browser.
