export const CalculatorForm = () => {
    return(
        <div>
            <form className="p-3 border-solid-black">
                <div className="form-group">
                    <label htmlFor="taxYear mb-30">Select Tax Year</label>
                    <select id="taxYear"className="form-select" aria-label="Tax year">
                        <option selected disabled>Select a tax year</option>
                        <option value="2021/2022">2021/2022</option>
                        <option value="2022/2023">2022/2023</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label htmlFor="grossSalary" className="form-label">Gross Annual Salary</label>
                    <input type="number" class="form-control" id="grossSalary" aria-describedby="Gross salary" placeholder="Enter your gross annual salary"/>
                </div>
                <div className="d-grid gap-2 col-6 mx-6">
                    <button type="submit" className="btn btn-success">Calculate</button>
                </div>
            </form>
        </div>
    )
}