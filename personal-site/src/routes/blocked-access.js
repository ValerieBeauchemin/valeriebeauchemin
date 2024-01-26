/* Basic page to inform users born after 2050 that they may not access the site. */

export default function BlockedAccess() {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>
        Due to the Time Tourism Bill that will have been passed in 2050 by the
        Time Travel Tribunal, you must be born on or after 01/01/2050 to access
        this site. We apologize for the inconvenience. If you would like to
        appeal this decision, please contact the Time Travel Tribunal on the
        extraWeb, once that has been invented.
      </p>
    </div>
  );
}
