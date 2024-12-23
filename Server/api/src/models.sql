

CREATE TABLE IF NOT EXISTS ServiceOrder(
	id INT NOT NULL,
    reportDate VARCHAR(40),
    imagePathIdentifier VARCHAR(255) NOT NULL,
    imagePathOverview VARCHAR(255) NOT NULL,
    imagePathFailureEvidence VARCHAR(255) NOT NULL
);


SELECT * FROM ServiceOrder