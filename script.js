const timeline = document.querySelector('.timeline');
    const startHandle = document.getElementById('start-handle');
    const endHandle = document.getElementById('end-handle');
    const yellowLine = document.getElementById('yellow-line');
    const timelineWidth = timeline.offsetWidth;

    // Initialize positions
    startHandle.style.left = `${timelineWidth * 0.15}px`; // Corresponds to 2018
    endHandle.style.left = `${timelineWidth * 0.53}px`; // Corresponds to 2020

    let activeHandle = null;

    function updateYellowLine() {
        const start = parseFloat(startHandle.style.left);
        const end = parseFloat(endHandle.style.left);

        yellowLine.style.left = `${start}px`;
        yellowLine.style.width = `${end - start}px`;
    }

    function handleMouseMove(event) {
        if (!activeHandle) return;

        const timelineRect = timeline.getBoundingClientRect();
        let newX = event.clientX - timelineRect.left;

        // Ensure handle stays within the timeline bounds
        if (newX < 0) newX = 0;
        if (newX > timelineWidth) newX = timelineWidth;

        if (activeHandle === startHandle && newX >= parseFloat(endHandle.style.left)) {
            newX = parseFloat(endHandle.style.left) - 10; // Prevent overlap
        } else if (activeHandle === endHandle && newX <= parseFloat(startHandle.style.left)) {
            newX = parseFloat(startHandle.style.left) + 10; // Prevent overlap
        }

        activeHandle.style.left = `${newX}px`;

        updateYellowLine(); // Update yellow line position and width
    }

    function handleMouseDown(event) {
        activeHandle = event.target;
    }

    function handleMouseUp() {
        activeHandle = null;
    }
    function handleMouseDown(event) {
            activeHandle = event.target;
        }

        function handleMouseUp() {
            activeHandle = null;
        }
        function increment(id) {
            const input = document.getElementById(id);
            input.value = parseInt(input.value) + 1000000;
        }

        function decrement(id) {
            const input = document.getElementById(id);
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
            }
        }

    startHandle.addEventListener('mousedown', handleMouseDown);
    endHandle.addEventListener('mousedown', handleMouseDown);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Initial yellow line update
    updateYellowLine();
        document.getElementById("btn-hitung").addEventListener("click", function () {
            document.querySelector(".main-content").innerHTML = `
                <div class="benchmarking">
                    <h3>Benchmarking Ratio:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Perusahaan</th>
                                <th>Negara</th>
                                <th>2020</th>
                                <th>2019</th>
                                <th>2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>MORIKAWA ENTERPRISE INC.</td>
                                <td>Japan</td>
                                <td>0.50</td>
                                <td>0.16</td>
                                <td>0.40</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>K.M.R CO.,LTD</td>
                                <td>Korea</td>
                                <td>6.28</td>
                                <td>2.24</td>
                                <td>5.95</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>VEIVA SCIENTIFIC INDIA PRIVATE</td>
                                <td>India</td>
                                <td>8.86</td>
                                <td>9.15</td>
                                <td>9.80</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>WOORE TECHNOLOGIES CO.,LTD</td>
                                <td>Korea</td>
                                <td>14.78</td>
                                <td>13.39</td>
                                <td>27.38</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>GREPCOR, INC.</td>
                                <td>Philippines</td>
                                <td>14.45</td>
                                <td>24.66</td>
                                <td>19.72</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="calculations">
                    <h3>Penghitungan:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Minimum</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kuartil 1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Kuartil 2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Kuartil 3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Maksimum</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>`;
        });