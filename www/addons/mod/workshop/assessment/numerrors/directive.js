// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_workshop')

/**
 * Directive to render workshop assessment strategy numerrors.
 *
 * @module mm.addons.mod_workshop
 * @ngdoc directive
 * @name mmaModWorkshopAssessmentStrategyNumErrors
 */
.directive('mmaModWorkshopAssessmentStrategyNumErrors', function($translate, $mmEvents, mmaModWorkshopAssessmentRefreshedEvent) {

    return {
        restrict: 'A',
        priority: 100,
        templateUrl: 'addons/mod/workshop/assessment/numerrors/template.html',
        link: function(scope) {
            var load = function() {
                if (!scope.assessment || !scope.form) {
                    return;
                }

                angular.forEach(scope.form.fields, function(field) {
                    field.dimtitle = $translate.instant('mma.mod_workshop_assessment_numerrors.dimensionnumber',
                        {'$a': field.number});
                });
            };

            load();

            var obsRefreshed = $mmEvents.on(mmaModWorkshopAssessmentRefreshedEvent, load);

            scope.$on('$destroy', function() {
                obsRefreshed && obsRefreshed.off && obsRefreshed.off();
            });
        }
    };
});
