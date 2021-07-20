String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};

function pageLinkFill(current_page) {
    var index = "";
    var members = "";
    var gallery = "";
    var featured = "";
    var all_mocs = "";
    var collabs = "";
    var apply = "";

    if (current_page === "index.html") {
        index = "active";
    } else if (current_page === "all-mocs.html") {
        gallery = "active";
        all_mocs = "active";
    } else if (current_page === "apply.html") {
        apply = "active";
    } else if (current_page === "featured.html") {
        featured = "active";
        gallery = "active";
    } else if (current_page === "members.html") {
        members = "active";
    } 

    var link_bar = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <!--USE FOR ACTIVE TAB-->
            <li class="nav-item">
            <a class="nav-link {0}" aria-current="page" href=".">Home</a>
            </li>

            <!--USE FOR INACTIVE TAB-->
            <li class="nav-item">
            <a class="nav-link {1}" href="members.html">Members</a>
            </li>

            <!--USE FOR DROPDOWN-->
            <li class="nav-item dropdown {2}">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gallery
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item {3}" href="featured.html">Featured MOCs</a></li>
                <li><a class="dropdown-item {4}" href="all-mocs.html">All MOCs</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item {5}" href="#">Collaborations</a></li>
            </ul>
            </li>

            <li class="nav-item">
            <a class="nav-link {6}" href="apply.html">Apply</a>
            </li>
        </ul>
    `.formatUnicorn(index, members, gallery, featured, all_mocs, collabs, apply);

    return link_bar;
}
