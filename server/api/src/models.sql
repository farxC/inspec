

CREATE TABLE IF NOT EXISTS OS(
	id INT NOT NULL,
    report_date VARCHAR(40),
    imagePathIdentifier VARCHAR(255) NOT NULL,
    imagePathOverview VARCHAR(255) NOT NULL,
    imagePathFailureEvidence VARCHAR(255) NOT NULL
);


SELECT * FROM OS