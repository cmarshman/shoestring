import React from 'react';

function EditSettings() {
    return (
                <div className="column is-two-thirds content">
                    <div>
                        <h2 id="Personal" className="title is-3">Personal Information</h2>
                        <p>Edit your personal information</p>
                        <form>
                            <p className="subtitle" id="formTitle">Change your name</p>
                            <p>If you are changing your name, make sure it is the same as the legal name associated with your bank account. </p>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control has-icons-left">
                                    <input className="input"
                                        type="text"
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        name="name"
                                        placeholder="Name (required)"
                                    // value={values.name}
                                    />
                                    {/* {values.name.length < 1 && touched.name && 'errors' ? (
                    <p className="errMsg">Please enter your name</p>
                            ): ''} */}
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user-astronaut"></i>
                                    </span>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-light"
                                            //   onClick={handleFormOnsubmit} 
                                            //   disabled={!values.phone.match(phoneno)}
                                            //   disabled={!values.email.match(emailVal)}
                                            //   disabled={!values.checked && 'errors'}
                                            id="twofish"
                                        >Submit</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>

                    <h2 id="keyword" className="title is-3">Keyword Research Checklist</h2>
                    <p>Sed ac pulvinar ex. Nullam eget justo ac tellus eleifend interdum. Ut gravida lorem semper leo hendrerit, vitae volutpat sapien maximus. Nam urna enim, pretium quis tincidunt at, ornare sit amet ligula. Nulla sodales, justo et ultrices porta, nisl magna congue sapien, sit amet commodo libero turpis sit amet ex. Donec molestie tristique lorem non scelerisque. Donec rutrum ex ac mauris dignissim, non posuere nisl bibendum. Praesent ornare justo id lectus vulputate fermentum. Praesent efficitur nec velit sed viverra. Pellentesque et magna urna. Praesent at diam vestibulum, semper tortor ac, ultricies nulla. Nulla sollicitudin tortor a sem facilisis lobortis. Morbi in eros metus. Donec quis dolor nulla.</p>

                    <h2 id="onpage" className="title is-3">On-Page SEO Checklist</h2>

                    <p>Sed ac pulvinar ex. Nullam eget justo ac tellus eleifend interdum. Ut gravida lorem semper leo hendrerit, vitae volutpat sapien maximus. Nam urna enim, pretium quis tincidunt at, ornare sit amet ligula. Nulla sodales, justo et ultrices porta, nisl magna congue sapien, sit amet commodo libero turpis sit amet ex. Donec molestie tristique lorem non scelerisque. Donec rutrum ex ac mauris dignissim, non posuere nisl bibendum. Praesent ornare justo id lectus vulputate fermentum. Praesent efficitur nec velit sed viverra. Pellentesque et magna urna. Praesent at diam vestibulum, semper tortor ac, ultricies nulla. Nulla sollicitudin tortor a sem facilisis lobortis. Morbi in eros metus. Donec quis dolor nulla.</p>

                    <h2 id="content" className="title is-3">Content Checklist</h2>

                    <p>Sed ac pulvinar ex. Nullam eget justo ac tellus eleifend interdum. Ut gravida lorem semper leo hendrerit, vitae volutpat sapien maximus. Nam urna enim, pretium quis tincidunt at, ornare sit amet ligula. Nulla sodales, justo et ultrices porta, nisl magna congue sapien, sit amet commodo libero turpis sit amet ex. Donec molestie tristique lorem non scelerisque. Donec rutrum ex ac mauris dignissim, non posuere nisl bibendum. Praesent ornare justo id lectus vulputate fermentum. Praesent efficitur nec velit sed viverra. Pellentesque et magna urna. Praesent at diam vestibulum, semper tortor ac, ultricies nulla. Nulla sollicitudin tortor a sem facilisis lobortis. Morbi in eros metus. Donec quis dolor nulla.</p>
                </div>
    )
}

export default EditSettings