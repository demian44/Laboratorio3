namespace Parcial {
	export class ManejadorEstilos {
		/**
		 * SetErrorClass
		 */
		public static SetErrorClass(id: string) {
			$('#' + id + 'Label').addClass('text-danger');
			$('#' + id + 'Input').addClass('is-invalid');
			$('#' + id + 'Help').show();
		}

		/**
		 * ResetClass
		 */
		public static ResetClass(id: String) {
			$('#' + id + 'Label').removeClass('text-danger');
			$('#' + id + 'Input').removeClass('is-invalid');
			$('#' + id + 'Help').hide();
		}
	}
}
