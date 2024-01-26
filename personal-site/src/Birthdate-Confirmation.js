/** React component for the birthdate confirmation button, and the pop-up that it creates. */
import Swal from "sweetalert2";
import "./Birthdate-Confirmation.css";

/** Handles the click event for the birthdate confirmation button. */
const handleClick = () => {
  Swal.fire({
    title: "Birthdate Confirmation",
    text: "I confirm that I was born on or before 12/31/2049",
    icon: "question",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    confirmButtonText: "Confirm",
    showDenyButton: true,
    denyButtonText: "Deny",
  }).then((result) => {
    /* If user confirmed birthdate, set cookie allowing them access, otherwise open an alert informing them that they have been denied access */
    if (result.isConfirmed) {
      document.cookie = "access=true";
      window.location.href = "/home";
    } else {
      Swal.fire({
        title: "Access Denied",
        text: "Due to the Time Tourism Bill that will have been passed in 2050, you must be born on or before 12/31/2049 to access this site.",
        icon: "error",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  });
};

/** BirthdateConfirmation component */
export default function BirthdateConfirmation() {
  return (
    <button className="Birthdate-Confirmation-Button" onClick={handleClick}>
      Enter
    </button>
  );
}
