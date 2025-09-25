import { useState } from 'react'
import Button from './Button'

import '../assets/styles/components/Form.css'

function Form() {
    const [buttonType, setButtonType] = useState('btn-secondary');
    const [buttonText, setButtonText] = useState('Next');
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState('');

    return (
           <form>
                {page === 1 && (
                    <>
                        <label>Choose a galaxy:</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="galaxy"
                                    value="milkyway"
                                    checked={selected === "milkyway"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Milky Way
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="galaxy"
                                    value="andromeda"
                                    checked={selected === "andromeda"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Andromeda
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="galaxy"
                                    value="triangulum"
                                    checked={selected === "triangulum"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Triangulum
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="galaxy"
                                    value="whirlpool"
                                    checked={selected === "whirlpool"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Whirlpool
                            </label>
                        </div>

                        <Button onClick={() => setPage(2)} buttonType={buttonType} text="Next" />
                    </>
                )}
                {page === 2 && (
                    <>
                        <label>Choose a surface type:</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="surface"
                                    value="solid"
                                    checked={selected === "solid"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Solid
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="surface"
                                    value="gas"
                                    checked={selected === "gas"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Surface
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="surface"
                                    value="liquid"
                                    checked={selected === "liquid"}
                                    onChange={e => setSelected(e.target.value)}
                                />
                                Liquid
                            </label>
                        </div>

                        <Button onClick={() => setPage(1)} buttonType={buttonType} text="Previous" />
                        <Button onClick={() => setPage(2)} buttonType={buttonType} text="Next" />
                    </>
                )}
                <div>Page {page}</div>
            </form>
        )
    }

export default Form;