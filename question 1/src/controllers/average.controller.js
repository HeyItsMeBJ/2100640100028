const storedNumbers = [];

const validateInputId = async (req, res, next) => {
  const { numberid } = req.params;
  if (
    !(numberid == "p" || numberid == "f" || numberid == "e" || numberid == "r")
  )
    return res.status(400).json({ error: "Invalid input ID" });

  next();
};

const fetchNumbers = async (req, res, next) => {
  try {
    const { numberid } = req.params;

    if (
      !(
        numberid == "p" ||
        numberid == "f" ||
        numberid == "e" ||
        numberid == "r"
      )
    )
      return res.status(400).json({ error: "Invalid input ID" });
    let resp;
    if (numberid == "p") {
      resp = await fetch(`http://20.244.56.144/test/primes`, {
        method: "GET",
      });
    } else if (numberid == "f") {
      resp = await fetch(`http://20.244.56.144/test/fibo`, {
        method: "GET",
      });
    } else if (numberid == "e") {
      resp = await fetch(`http://20.244.56.144/test/even`, {
        method: "GET",
      });
    } else if (numberid == "r") {
      resp = await fetch(`http://20.244.56.144/test/rand`, {
        method: "GET",
      });
    }
    console.log(resp);
    if (resp.status != 401) storedNumbers = [...resp.numbers, ...storedNumbers];

    // if (!resp.status!=401) return res.status(500).json({ error: "Error fetching numbers" });
    next();
  } catch (error) {
    console.error("Error fetching numbers:", error);
    return res.status(500).json({ error: "Error fetching numbers" });
  }
};

const calculateAverage = (req, res) => {
  const windowSize = 10;
  const latestNumbers = storedNumbers.slice(-windowSize);

  const sum = latestNumbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / latestNumbers.length;

  const response = {
    windowPrevState: storedNumbers.slice(0, -windowSize),
    windowCurrState: latestNumbers,
    numbers: latestNumbers,
    avg: avg.toFixed(2),
  };

  res.status(200).json(response);
};
export { calculateAverage, validateInputId, fetchNumbers };
