function (doc) {
	if (doc._id.substr(0, 4) === "item"){
		emit(doc._id.substr(4), {
			"id": doc._id,
			"rev": doc._rev,
			"apptName": doc.apptName,
			"apptDate": doc.apptDate,
			"email": doc.email,
			"phone": doc.phone,
			"apptType": doc.apptType,
			"itemName": doc.itemName,
			"amount": doc.amount,
			"comments": doc.comments
		});
	}
};