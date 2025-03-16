const template = {
  makeParticipant: function (count) {
    // START HTML TEMPLATE
    const participantHtml = ` 
              <section class="participant">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname_${count}"> First Name<span>*</span></label>
              <input id="fname_${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity_${count}">Activity #<span>*</span></label>
              <input id="activity_${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee_${count}">Fee ($)<span>*</span></label>
              <input id="fee_${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date_${count}">Desired Date <span>*</span></label>
              <input id="date_${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
    `; // END HTML TEMPLATE

        // get where participant needs to load to
        const participantContainer = document.getElementById("participants-container");
        // insert template to index.html
        participantContainer.insertAdjacentHTML("beforebegin", participantHtml); // end html template
  },

  makeSummary: function (info) {
    console.log("Calling make summary")
    console.log(info)
    const summaryHtml = `
    <h2>Thank you ${info.adultName} for registering.</h2>
    <p>You have registered ${info.participantTotal} participants and owe $${info.feeTotal} in Fees.</p>
    `
    // get the summary section
    const summaryDiv = document.getElementById("summary")
    // add the template to the summary
    summaryDiv.innerHTML = summaryHtml;
  }
};

export default template;