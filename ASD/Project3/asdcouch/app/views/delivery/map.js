function (doc) {
	if (doc._id.substr(0, 13) === "item:delivery"){
		emit(doc._id.substr(13), {
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