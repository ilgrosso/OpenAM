/**
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2014-2015 ForgeRock AS. All Rights Reserved
 *
 * The contents of this file are subject to the terms
 * of the Common Development and Distribution License
 * (the License). You may not use this file except in
 * compliance with the License.
 *
 * You can obtain a copy of the License at
 * http://forgerock.org/license/CDDLv1.0.html
 * See the License for the specific language governing
 * permission and limitations under the License.
 *
 * When distributing Covered Code, include this CDDL
 * Header Notice in each file and include the License file
 * at http://forgerock.org/license/CDDLv1.0.html
 * If applicable, add the following below the CDDL Header,
 * with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 */

/*global define*/

define("config/routes/PolicyRoutesConfig", [
    "org/forgerock/commons/ui/common/util/Constants"
],function (constants) {
    return {
        "manageApps": {
            view: "org/forgerock/openam/ui/policy/applications/ManageApplicationsView",
            url: "apps/",
            role: "ui-admin"
        },
        "editApp": {
            view: "org/forgerock/openam/ui/policy/applications/EditApplicationView",
            url: /^app\/(.*?)(?:\/){0,1}$/,
            defaults: [""],
            role: "ui-admin",
            pattern: "app/?"
        },
        "managePolicies": {
            view: "org/forgerock/openam/ui/policy/policies/ManagePoliciesView",
            url: /^app\/(.+?)\/(policies)\//,
            role: "ui-admin",
            pattern: "app/?/policies/"
        },
        "manageReferrals": {
            view: "org/forgerock/openam/ui/policy/policies/ManagePoliciesView",
            url: /^app\/(.+?)\/(referrals)\//,
            role: "ui-admin",
            pattern: "app/?/referrals/"
        },
        "editPolicy": {
            view: "org/forgerock/openam/ui/policy/policies/EditPolicyView",
            url: /^app\/(.+?)\/policy\/(.*?)(?:\/){0,1}$/,
            defaults: ["", ""],
            role: "ui-admin",
            pattern: "app/?/policy/?"
        },
        "editReferral": {
            view: "org/forgerock/openam/ui/policy/referrals/EditReferralView",
            url: /^app\/(.+?)\/referral\/(.*?)(?:\/){0,1}$/,
            defaults: ["", ""],
            role: "ui-admin",
            pattern: "app/?/referral/?"
        },
        "manageResourceTypes": {
            view: "org/forgerock/openam/ui/policy/resourcetypes/ManageResourceTypesView",
            url: "resourceTypes/",
            role: "ui-admin"
        },
        "editResourceType": {
            view: "org/forgerock/openam/ui/policy/resourcetypes/EditResourceTypeView",
            url: /^resourceType\/(.*?)(?:\/){0,1}$/,
            defaults: [""],
            role: "ui-admin",
            pattern: "resourceType/?"
        },
        "amConsole": {
            url: "console",
            event: constants.EVENT_RETURN_TO_AM_CONSOLE
        }
    };
});
