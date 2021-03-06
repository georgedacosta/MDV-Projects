function (doc) {
	if (doc._id.substr(0, 14) === "item:appraisal"){
		emit(doc._id.substr(14), {
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