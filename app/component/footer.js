export default [function () {
	return {
		restrict: 'E',
		replace: true,
		template: `<div class="footer">
			<div class="content-wrapper">
				<div class="columns">
					<div class="col">
						<div class="heading">RIVER CITY</div>
						<div>Lorem ipsum dolor sit amet, maiestatis voluptatum sadipscing vis cu, ex tation adolescens pri. Ad sit saperet imperdiet, eirmod verear iisque id vix. Illum instructior definitionem eam ad. Cu dolorum expetendis eos, ea mea legere everti vivendum. Eam eu eros commune dissentias. Tollit deleniti vel ea.</div>
					</div>
					<div class="col">2</div>
					<div class="col">Social links</div>
				</div>
		
				<div class="footer-links">
					<div class="link-item">HOME</div>
					<div class="link-item">PORTFOLIO</div>
					<div class="link-item">SERVICES</div>
					<div class="link-item">TEAM MEMBER</div>
					<div class="link-item">CLIENT</div>
					<div class="link-item">CONTACT</div>
				</div>
			</div>
		</div>`,
		link: function (scope, element, attrs) {

		}
	}
}]