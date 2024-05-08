window.onload = function () {
    document.getElementById("add").onclick = addItemtoDo;
    document.getElementById("delete").onclick = deleteItemtoDo;
	
	$("#todolist").sortable({
        update: function (event, ui) {
            var OrderofList = $("#todolist li").map(function() {
                return $(this).text();
            }).get();

            var todoList = {
                items: OrderofList
            };

            fetch('webservice.php', {
                method: 'POST',
                body: JSON.stringify({ todolist: todoList })
            })
            
			.then(response => {
                if (response.status !== 200) {
                    console.error('Error saving to-do list. HTTP error code: ' + response.status);
                }
            })
			
            .catch(error => {
                console.error('Error saving to-do list:', error);
            });
        }
    });
		
    fetch('webservice.php', {
		method: 'GET'
    })
	
    .then(response => {
        if (response.status === 200) {
            return response.json(); 
        } 
		
		else if (response.status === 204) {
            return []; 
        } 
		
		else {
            console.error('Error retrieving to-do list. HTTP error code: ' + response.status);
        }
	})
	
    .then(data => {
        if (data && data.items) {
            var todoList = data.items;
            var listElement = document.getElementById("todolist");

            todoList.forEach(function(item) {
                var li = document.createElement("li");
                li.textContent = item;
                listElement.appendChild(li);
            });
        }
    })
	
    .catch(error => {
        console.error('Error retrieving to-do list:', error);
    });
};

function addItemtoDo() {
    var li = document.createElement("li");
    var userInput = document.getElementById("itemtext").value;
    var node = document.createTextNode(userInput);

    li.appendChild(node);

    document.getElementById("todolist").appendChild(li);
	$( "#todolist" ).sortable("refresh");
	    var todoList = {
        items: Array.from(document.getElementById("todolist").getElementsByTagName("li")).map(item => item.textContent)
    };
	
	fetch('webservice.php', {
        method: 'POST',
        body: JSON.stringify({ todolist: todoList })
    })
	
    .then(response => {
        if (response.status !== 200) {
            console.error('Error saving to-do list. HTTP error code: ' + response.status);
        }
    })
	
    .catch(error => {
        console.error('Error saving to-do list:', error);
    });
}

function deleteItemtoDo() {
	var li = document.getElementsByTagName("li");

    if (li.length > 0) {
        var listElement = document.getElementById("todolist");
        var itemText = li[0].textContent;

        listElement.removeChild(li[0]);

        fetch('webservice.php', {
            method: 'GET'
        })
        
		.then(response => {
            if (response.status === 200) {
                return response.json(); 
            } 
			
			else if (response.status === 204) {
                return { items: [] }; 
            } 
			
			else {
                console.error('Error retrieving to-do list. HTTP error code: ' + response.status);
                throw new Error('Failed to retrieve the to-do list.');
            }
        })
        
		.then(data => {
            if (data && data.items) {
                data.items = data.items.filter(item => item !== itemText);

                return fetch('webservice.php', {
                    method: 'POST',
                    body: JSON.stringify({ todolist: data })
                });
            }
        })
        
		.catch(error => {
            console.error('Error loading or updating to-do list:', error);
        });
    }
}