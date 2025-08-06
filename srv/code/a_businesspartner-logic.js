/**
 * read data from external service
 * @On(event = { "READ" }, entity = "RiskManagementService.A_BusinessPartner")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Function} next - Callback function to the next handler
*/
module.exports = async function(request, next) {
	// Your code here
	return next();
}