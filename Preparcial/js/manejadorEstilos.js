var Parcial;
(function (Parcial) {
    var ManejadorEstilos = /** @class */ (function () {
        function ManejadorEstilos() {
        }
        /**
         * SetErrorClass
         */
        ManejadorEstilos.SetErrorClass = function (id) {
            $('#' + id + 'Label').addClass('text-danger');
            $('#' + id + 'Input').addClass('is-invalid');
            $('#' + id + 'Help').show();
        };
        /**
         * ResetClass
         */
        ManejadorEstilos.ResetClass = function (id) {
            $('#' + id + 'Label').removeClass('text-danger');
            $('#' + id + 'Input').removeClass('is-invalid');
            $('#' + id + 'Help').hide();
        };
        return ManejadorEstilos;
    }());
    Parcial.ManejadorEstilos = ManejadorEstilos;
})(Parcial || (Parcial = {}));
